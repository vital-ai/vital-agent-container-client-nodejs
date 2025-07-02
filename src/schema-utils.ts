/**
 * Utility functions for VITAL.ai schema management
 */

import { VitalSchema } from './vital-schema-manager';

/**
 * Sorts schemas in topological order based on their dependencies
 * Ensures that no schema is processed before its dependencies
 * 
 * @param schemas Array of schema objects to sort
 * @returns Sorted array of schemas
 * @throws Error if circular dependency is detected but we can't break it
 */
export function topologicalSort(schemas: VitalSchema[], silent: boolean = false): VitalSchema[] {
  // Output array for sorted schemas
  const sortedSchemas: VitalSchema[] = [];
  
  // Queue for schemas with no remaining dependencies
  const roots: VitalSchema[] = [];
  
  // Copy of the schemas array to avoid modifying the input
  const remainingSchemas = [...schemas];
  
  // Track domains by URI for easy lookup
  const domainMap = new Map<string, VitalSchema>();
  
  // Filter out undefined/invalid dependencies first
  const validSchemas = remainingSchemas.filter(schema => 
    schema && schema.domainURI && typeof schema.domainURI === 'string');
  
  // Track available domain URIs
  const availableDomainURIs = new Set<string>();
  validSchemas.forEach(schema => {
    availableDomainURIs.add(schema.domainURI);
  });
  
  // Prepare by adding parentsCopy for tracking during the algorithm
  validSchemas.forEach(schema => {
    domainMap.set(schema.domainURI, schema);
    
    // Add a parentsCopy property to track remaining dependencies
    // Only include valid parents that actually exist in our schemas
    const validParents = (schema.parents || []).filter(p => 
      p && typeof p === 'string' && availableDomainURIs.has(p));
      
    (schema as any).parentsCopy = validParents;
  });
  
  // Debug log for schema dependencies
  if (!silent) {
    console.log('\n--- Debug: Topological Sort Initial State ---');
    console.log(`Found ${validSchemas.length} schemas to sort`);  
    for (const schema of validSchemas) {
      const parentsCopy = (schema as any).parentsCopy || [];
      console.log(`Schema: ${schema.name}, Parents: [${parentsCopy.join(', ') || 'none'}]`);  
    }
  }

  // First pass: Find initial roots (schemas with no dependencies)
  for (let i = validSchemas.length - 1; i >= 0; i--) {
    const schema = validSchemas[i];
    const parentsCopy = (schema as any).parentsCopy;
    
    if (!parentsCopy || parentsCopy.length === 0) {
      validSchemas.splice(i, 1);
      roots.push(schema);
    }
  }
  
  // Priority for special schemas (vital-core and vital) if found
  const prioritySchemaURIs = [
    'http://vital.ai/ontology/vital-core',
    'http://vital.ai/ontology/vital'
  ];
  
  // First ensure vital-core and vital are processed in the correct order
  let prioritySchemas: VitalSchema[] = [];
  
  // Process each priority schema in the specified order
  for (const priorityURI of prioritySchemaURIs) {
    // Look in both roots and validSchemas for the priority schema
    let existingRootIndex = roots.findIndex(r => r.domainURI === priorityURI);
    let prioritySchema: VitalSchema | null = null;
    
    if (existingRootIndex >= 0) {
      // Found in roots, remove it so we can add it to our priority list
      prioritySchema = roots.splice(existingRootIndex, 1)[0];
      if (!silent) {
        console.log(`Found priority schema in roots: ${prioritySchema.name} (${prioritySchema.domainURI})`);
      }
    } else {
      // Check in validSchemas
      const prioritySchemaIndex = validSchemas.findIndex(s => s.domainURI === priorityURI);
      if (prioritySchemaIndex >= 0) {
        prioritySchema = validSchemas.splice(prioritySchemaIndex, 1)[0];
        if (!silent) {
          console.log(`Found priority schema: ${prioritySchema.name} (${prioritySchema.domainURI})`);
        }
      } else {
        if (!silent) {
          console.warn(`Priority schema not found: ${priorityURI}`);
        }
      }
    }
    
    if (prioritySchema) {
      // Clear any dependencies to ensure it's processed as a root
      (prioritySchema as any).parentsCopy = [];
      prioritySchemas.push(prioritySchema);
    }
  }
  
  // Put priority schemas at the beginning of roots
  roots.unshift(...prioritySchemas);
  
  if (!silent) {
    console.log(`After priority handling: Roots (${roots.length}): ${roots.map(r => r.name).join(', ')}`);
    console.log(`Remaining schemas (${validSchemas.length}): ${validSchemas.map(s => s.name).join(', ')}`);
  }

  
  // Still no roots? Break circular dependencies
  if (roots.length === 0) {
    if (!silent) {
      console.warn('No root schemas found. Breaking circular dependency by selecting a schema.');
    }
    
    // Sort by dependency count and select the one with fewest dependencies
    validSchemas.sort((a, b) => {
      const aDeps = ((a as any).parentsCopy || []).length;
      const bDeps = ((b as any).parentsCopy || []).length;
      return aDeps - bDeps;
    });
    
    // Pick the schema with fewest dependencies
    if (validSchemas.length > 0) {
      const firstSchema = validSchemas.shift()!;
      (firstSchema as any).parentsCopy = []; // Clear dependencies
      if (!silent) {
        console.log(`Breaking circular dependency by starting with schema: ${firstSchema.name}`);
      }
      roots.push(firstSchema);
    } else {
      if (!silent) {
        console.error("No valid schemas found after filtering. Cannot proceed with sort.");
      }
      return schemas; // Return original order if we can't sort
    }
  }
  
  // Process schemas in topological order
  let iterationCount = 0;
  const maxIterations = schemas.length * 2; // Safety limit to prevent infinite loops
  
  while (roots.length > 0 && iterationCount < maxIterations) {
    iterationCount++;
    
    // Remove a schema from the roots queue
    const schema = roots.shift()!;
    
    // Add to the sorted result
    sortedSchemas.push(schema);
    
    const schemaURI = schema.domainURI;
    
    // Update dependent schemas
    for (let i = validSchemas.length - 1; i >= 0; i--) {
      const dependentSchema = validSchemas[i];
      const parentsCopy = (dependentSchema as any).parentsCopy;
      
      if (!parentsCopy) continue;
      
      // Check if this schema depends on the one we just processed
      const dependencyIndex = parentsCopy.indexOf(schemaURI);
      if (dependencyIndex >= 0) {
        // Remove the dependency
        parentsCopy.splice(dependencyIndex, 1);
        
        // If no more dependencies, add to roots
        if (parentsCopy.length === 0) {
          validSchemas.splice(i, 1);
          roots.push(dependentSchema);
        }
      }
    }
    
    // Break circular dependencies if we're stuck
    if (roots.length === 0 && validSchemas.length > 0) {
      if (!silent) {
        console.warn(`Breaking circular dependency during iteration ${iterationCount}`);
      }
      
      // Sort remaining schemas by dependency count
      validSchemas.sort((a, b) => {
        const aDeps = ((a as any).parentsCopy || []).length;
        const bDeps = ((b as any).parentsCopy || []).length;
        return aDeps - bDeps;
      });
      
      // Remove schema with fewest dependencies and add to roots
      const nextSchema = validSchemas.shift()!;
      (nextSchema as any).parentsCopy = []; // Clear dependencies
      if (!silent) {
        console.log(`Adding ${nextSchema.name} to break circular dependency`);
      }
      roots.push(nextSchema);
    }
  }
  
  // Handle any remaining schemas by trying to sort them by dependency count
  if (validSchemas.length > 0) {
    if (!silent) {
      console.warn(`Adding ${validSchemas.length} remaining schemas with unresolved dependencies`);
    }
    
    // Try to sort remaining schemas by their dependencies to get the most sensible order
    validSchemas.sort((a, b) => {
      const aDeps = ((a as any).parentsCopy || []).length;
      const bDeps = ((b as any).parentsCopy || []).length;
      
      // If dependency counts are equal, check if one depends on the other
      if (aDeps === bDeps) {
        // If a depends on b, b should come first
        if ((a as any).parentsCopy?.includes(b.domainURI)) {
          return 1;
        }
        // If b depends on a, a should come first
        if ((b as any).parentsCopy?.includes(a.domainURI)) {
          return -1;
        }
      }
      
      return aDeps - bDeps;
    });
    
    // Log the order of remaining schemas
    if (!silent) {
      console.log('Remaining schemas in dependency order:');
      validSchemas.forEach((schema, index) => {
        const deps = ((schema as any).parentsCopy || []).length;
        console.log(`${index + 1}. ${schema.name} (${deps} unresolved deps)`);
      });
    }
    
    sortedSchemas.push(...validSchemas);
  }
  
  // Clean up the temporary parentsCopy properties
  sortedSchemas.forEach(schema => {
    if ((schema as any).parentsCopy) {
      delete (schema as any).parentsCopy;
    }
  });
  
  // Output ordering result
  if (!silent) {
    console.log('\n--- Debug: Topological Sort Results ---');
    console.log(`Sorted ${sortedSchemas.length} schemas in ${iterationCount} iterations`);
  }
  
  if (!silent) {
    console.log('\n=== FINAL SORT ORDER ===');
    sortedSchemas.forEach((schema, index) => {
      console.log(`${index + 1}. ${schema.name} (${schema.domainURI})`);
    });
    console.log('=========================\n');
  }
  
  return sortedSchemas;
}

/**
 * Finds missing schemas based on dependencies
 * 
 * @param schemas Array of available schemas
 * @returns Array of missing schema URIs
 */
export function findMissingDependencies(schemas: VitalSchema[]): string[] {
  const missing: string[] = [];
  const availableDomains = new Set<string>();
  
  // First, collect all available domain URIs
  schemas.forEach(schema => {
    availableDomains.add(schema.domainURI);
  });
  
  // Check each schema's dependencies
  schemas.forEach(schema => {
    if (schema.parents && Array.isArray(schema.parents)) {
      schema.parents.forEach(parentURI => {
        if (!availableDomains.has(parentURI)) {
          if (!missing.includes(parentURI)) {
            missing.push(parentURI);
          }
        }
      });
    }
  });
  
  return missing;
}

/**
 * Verifies that all schema dependencies are satisfied
 * 
 * @param schemas Array of schemas to verify
 * @returns true if all dependencies are satisfied, false otherwise
 */
export function verifyDependencies(schemas: VitalSchema[]): boolean {
  return findMissingDependencies(schemas).length === 0;
}
