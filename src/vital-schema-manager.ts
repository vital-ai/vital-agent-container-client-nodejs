/**
 * VitalSchemaManager - TypeScript implementation for managing VITAL.ai schemas
 * 
 * This manager handles:
 * 1. Loading all schema files from vital_schema and domain_schema directories
 * 2. Providing type-safe object creation similar to graphObject
 * 3. Validating message structures against the loaded schemas
 * 4. Supporting inheritance across schemas
 */

import * as fs from 'fs';
import * as path from 'path';
import { EventEmitter } from 'events';
import { topologicalSort, findMissingDependencies } from './schema-utils';

// Define core types
export interface VitalProperty {
  type: string;
  [key: string]: any;
}

export interface VitalSchemaClass {
  id?: string; // Made optional to support extends-only classes
  parent: string;
  name?: string;
  extends?: string; // Added extends property for class extension support
  properties: {
    [key: string]: VitalProperty;
  };
}

export interface VitalSchema {
  domainURI: string;
  name: string;
  id: string; // Added id property to match usage
  version: string;
  domainOWLHash?: string;
  vitalsignsVersion?: string;
  parents: string[];
  schemas: VitalSchemaClass[];
}

/**
 * Base interface for all graph objects
 * This is just a TypeScript interface for development - the actual structure
 * comes from the loaded schema (GraphObject in vital-core)
 */
export interface GraphObject {
  URI?: string;
  type: string;
  'http://vital.ai/ontology/vital-core#vitaltype'?: string;
  types?: string[];
  [key: string]: any;
}



// Type guard for schema objects
function isVitalSchema(obj: any): obj is VitalSchema {
  return obj && 
         typeof obj === 'object' && 
         typeof obj.domainURI === 'string' && 
         typeof obj.name === 'string' && 
         Array.isArray(obj.schemas);
}

export class VitalSchemaManager extends EventEmitter {
  // Cache for the topologically sorted schemas to avoid redundant sorting
  private sortedSchemasCache: VitalSchema[] | null = null;
  // Maps to store loaded schemas and class definitions
  private schemas: Map<string, VitalSchema> = new Map();
  private classSchemas: Map<string, VitalSchemaClass> = new Map();
  private classes: Map<string, VitalSchemaClass> = new Map(); // Map for class lookup by URI
  private parentChildMap: Map<string, string[]> = new Map();
  private shortNameToURI: Map<string, string> = new Map();
  private uriToShortName: Map<string, string> = new Map();
  private propertiesMap: Map<string, VitalProperty> = new Map();
  private importsMap: Map<string, string[]> = new Map(); // Tracks schema imports/parents
  private dependentsMap: Map<string, string[]> = new Map(); // Tracks schema dependents
  private domains: Array<{ name: string, uri: string, version: string }> = []; // List of loaded domains
  private currentLoadingSchema: any = null; // Tracks the schema currently being loaded

  // Constants for common prefixes and important URIs
  private static readonly VITAL_CORE_URI = 'http://vital.ai/ontology/vital-core#';
  private static readonly VITAL_CORE_DOMAIN_URI = 'http://vital.ai/ontology/vital-core';
  private static readonly VITAL_DOMAIN_URI = 'http://vital.ai/ontology/vital';
  
  // Base class URIs
  private static readonly VITAL_NODE_URI = 'http://vital.ai/ontology/vital-core#VITAL_Node';
  private static readonly VITAL_EDGE_URI = 'http://vital.ai/ontology/vital-core#VITAL_Edge';
  private static readonly VITAL_HYPER_NODE_URI = 'http://vital.ai/ontology/vital-core#VITAL_HyperNode';
  private static readonly VITAL_HYPER_EDGE_URI = 'http://vital.ai/ontology/vital-core#VITAL_HyperEdge';
  private static readonly VITAL_GRAPH_CONTAINER_OBJECT_URI = 'http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject';
  
  // Singleton instance
  private static instance: VitalSchemaManager;

  /**
   * Get singleton instance
   */
  public static getInstance(): VitalSchemaManager {
    if (!VitalSchemaManager.instance) {
      VitalSchemaManager.instance = new VitalSchemaManager();
    }
    return VitalSchemaManager.instance;
  }

  /**
   * Private constructor to enforce singleton pattern
   */
  private constructor() {
    super();
  }
  
  /**
   * Reset the schema manager state
   * Used when loading new schemas to clear previous state
   */
  private reset(): void {
    this.schemas.clear();
    this.classes.clear();
    this.classSchemas.clear();
    this.shortNameToURI.clear();
    this.uriToShortName.clear();
    this.parentChildMap.clear();
    this.importsMap.clear();
    this.dependentsMap.clear();
    this.propertiesMap.clear();
    this.domains = [];
  }
  
  /**
   * Clean up resources and remove event listeners
   * Call this method when you're done with the schema manager to allow the process to exit cleanly
   */
  public cleanup(): void {
    // Remove all event listeners to prevent the process from hanging
    this.removeAllListeners();
    
    // Reset all data structures
    this.reset();
    
    console.log('Schema manager cleaned up successfully');
  }

  /**
   * Load schemas from directories
   * @param directories Array of directories to load schemas from
   * @returns Promise resolving to the number of schemas loaded
   */
  public async loadSchemas(directories: string[]): Promise<number> {
    try {
      // Reset the schema manager and clear any cached sort results
      this.reset();
      this.sortedSchemasCache = null;
      
      // Step 1: Collect all schemas from all directories into a single unified list
      interface SchemaModule {
        path: string;
        schema: VitalSchema;
      }
      
      const schemaModules: SchemaModule[] = [];
      
      // Log the directories we're searching in
      console.log(`\nSearching for schemas in ${directories.length} directories:`);
      directories.forEach(dir => console.log(` - ${dir}`));
      
      // Collect all schemas from all directories into a single list
      for (const directory of directories) {
        try {
          const allFiles = fs.readdirSync(directory);
          
          // Filter to only include .ts and .js files
          const schemaFiles = allFiles.filter(file => file.endsWith('.ts') || file.endsWith('.js'));
          
          console.log(`Found ${schemaFiles.length} schema files in ${directory}`);
          
          for (const file of schemaFiles) {
            
            const filePath = path.join(directory, file);
            
            try {
              // Use dynamic import to load the schema module
              const module = await import(filePath);
              
              if (module && module.default && typeof module.default === 'object') {
                // Only add if it's not already in the array (avoid duplicates)
                if (!schemaModules.some(m => m.schema.domainURI === module.default.domainURI)) {
                  schemaModules.push({
                    path: filePath,
                    schema: module.default
                  });
                } else {
                  console.warn(`Duplicate schema found and skipped: ${module.default.domainURI} in ${filePath}`);
                }
              }
            } catch (error) {
              console.error(`Error importing schema from ${filePath}:`, error);
            }
          }
        } catch (error) {
          console.error(`Error reading directory ${directory}:`, error);
        }
      }

      console.log(`\nTotal schemas collected: ${schemaModules.length}`);
      
      if (schemaModules.length === 0) {
        throw new Error('No schema files found. Check the directories and file formats.');
      }
      
      // Step 2: Validate that vital-core and vital schemas are present in the collected schemas
      const vitalCoreModule = schemaModules.find(m => m.schema.domainURI === VitalSchemaManager.VITAL_CORE_DOMAIN_URI);
      const vitalModule = schemaModules.find(m => m.schema.domainURI === VitalSchemaManager.VITAL_DOMAIN_URI);
      
      if (!vitalCoreModule) {
        throw new Error('Required schema "vital-core" not found in schema files. This schema must be present.');
      } else {
        console.log(`Found vital-core schema at ${vitalCoreModule.path}`);
      }
      
      if (!vitalModule) {
        throw new Error('Required schema "vital" not found in schema files. This schema must be present.');
      } else {
        console.log(`Found vital schema at ${vitalModule.path}`);
      }
      
      // Step 3: Get all schemas as a list of VitalSchema objects
      const allSchemas = schemaModules.map(m => m.schema);
      
      // Step 4: Perform a single topological sort on ALL schemas (including vital-core and vital)
      try {
        console.info('\n--- Schema Dependency Sort ---');
        console.info(`Sorting all ${allSchemas.length} schemas including vital-core and vital`);
        
        // Use the topologicalSort function with priority handling for vital-core and vital
        // It knows to prioritize vital-core and vital automatically
        const sortedSchemas = topologicalSort(allSchemas, true);
        
        // Cache the sorted schemas for future use
        this.sortedSchemasCache = sortedSchemas;
        
        // Log the final sort order
        console.info('\n=== FINAL SCHEMA SORT ORDER ===');
        this.sortedSchemasCache.forEach((schema, index) => {
          console.info(`${index + 1}. ${schema.name} (${schema.domainURI})`);
        });
        console.info('===============================\n');
        
        // Verify the first two schemas are vital-core and vital in that order
        if (sortedSchemas.length >= 2 &&
            sortedSchemas[0].domainURI === VitalSchemaManager.VITAL_CORE_DOMAIN_URI &&
            sortedSchemas[1].domainURI === VitalSchemaManager.VITAL_DOMAIN_URI) {
          console.info('Sort successful: vital-core and vital are first in correct order');
        } else {
          console.warn('WARNING: Sort did not place vital-core and vital first in correct order.');
          console.warn('This could cause schema registration problems.');
        }
      } catch (error) {
        console.error('Error during topological sort:', error);
        
        // On error, create a fallback sorted list with vital-core and vital first
        console.warn('Using fallback sort order with vital-core and vital first');
        
        // Extract vital-core and vital
        const vitalCoreSchema = vitalCoreModule.schema;
        const vitalSchema = vitalModule.schema;
        
        // Sort remaining schemas alphabetically
        const otherSchemas = schemaModules
          .filter(m => 
            m.schema.domainURI !== VitalSchemaManager.VITAL_CORE_DOMAIN_URI && 
            m.schema.domainURI !== VitalSchemaManager.VITAL_DOMAIN_URI
          )
          .map(m => m.schema)
          .sort((a, b) => (a.name || '').localeCompare(b.name || ''));
        
        // Store in cache
        this.sortedSchemasCache = [vitalCoreSchema, vitalSchema, ...otherSchemas];
      }
      
      // Step 5: Register schemas in the exact order from the sorted cache
      console.log('\nRegistering schemas in dependency order:');
      
      for (const schema of this.sortedSchemasCache) {
        await this.registerSchema(schema);
      }
      
      // Step 6: Generate and display domain hierarchy tree
      console.log('\nDomain Hierarchy Tree:');
      this.prettyPrintDomainHierarchy();
      
      // Emit an event indicating that all schemas have been loaded
      this.emit('schemas-loaded', this.schemas.size);
      return this.schemas.size;
    } catch (error) {
      console.error('Error loading schemas:', error);
      throw error;
    }
  }
  
  /**
   * Get schemas sorted in topological order for use in other operations
   * Returns the cached sort result if available, NEVER re-sorts
   * @returns Array of schemas in topological order
   */
  private getSortedSchemas(): VitalSchema[] {
    // If we have cached sorted schemas, return them
    if (this.sortedSchemasCache && this.sortedSchemasCache.length > 0) {
      return this.sortedSchemasCache;
    }
    
    // If cache is empty but schemas are loaded, log an error as this shouldn't happen
    // Something is wrong with our caching logic if this occurs
    console.error('ERROR: Sorted schemas cache is empty when it should not be!');
    console.error('This indicates a bug in the schema manager. Will return unsorted schemas.');
    
    // Get all schemas as array for emergency fallback (no sorting)
    const schemas = Array.from(this.schemas.values());
    
    // Sort the schemas by name for stable output
    schemas.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
    
    return schemas;
  }  

  /**
   * Register a schema with the manager
   * @param schema Schema to register
   */
  public async registerSchema(schema: VitalSchema): Promise<void> {
    // Skip if schema already registered
    if (this.schemas.has(schema.domainURI)) {
      console.log(`Schema ${schema.name} (${schema.domainURI}) already registered, skipping`);
      return;
    }
    
    // Register the schema
    this.schemas.set(schema.domainURI, schema);
    console.log(`\nRegistering schema ${schema.name} (${schema.domainURI})`);
    
    // Track the schema in domains list
    this.domains.push({
      name: schema.name,
      uri: schema.domainURI,
      version: schema.version
    });
    
    // Register each class within the schema
    if (schema.schemas && Array.isArray(schema.schemas)) {
      schema.schemas.forEach(classSchema => {
        // Handle case where class ID is missing but extends is defined
        if (!classSchema.id) {
          if (classSchema.extends) {
            const extendedClassUri = classSchema.extends;
            
            // Check if the extended class exists
            if (!this.classSchemas.has(extendedClassUri)) {
              console.warn(`Cannot extend non-existent class ${extendedClassUri} in schema ${schema.name} (${schema.domainURI})`);
              console.warn('  This likely means parent schemas need to be loaded first');
              // Continue to the next class schema
              return;
            }
            
            // Get the extended class schema
            const extendedClassSchema = this.classSchemas.get(extendedClassUri);
            // Hide the 'Extending class' logs per user request
            // console.log(`Extending class ${extendedClassUri} in schema ${schema.name} (${schema.domainURI})`);
            
            // Add properties from this class to the extended class
            if (classSchema.properties && extendedClassSchema) {
              const currentProperties = extendedClassSchema.properties || {};
              
              // Add new properties
              Object.entries(classSchema.properties).forEach(([propUri, propDef]) => {
                if (currentProperties[propUri]) {
                  console.warn(`  Overriding existing property ${propUri} in class ${extendedClassUri}`);
                }
                currentProperties[propUri] = propDef;
                
                // Ensure the property is associated with the extended class
                if (!propDef.domainClassesURIs) {
                  propDef.domainClassesURIs = [];
                }
                
                // Add the extended class URI to the property's domainClassesURIs if not already present
                if (!propDef.domainClassesURIs.includes(extendedClassUri)) {
                  propDef.domainClassesURIs.push(extendedClassUri);
                }
                
                // Store the property definition in the properties map
                this.propertiesMap.set(propUri, propDef);
              });
              
              // Update the extended class schema with merged properties
              extendedClassSchema.properties = currentProperties;
              this.classSchemas.set(extendedClassUri, extendedClassSchema);
            }
            
            // Skip further processing for this class entry since we've handled it
            return;
          } else {
            // Neither id nor extends is present - log error
            console.error(`ERROR: Missing class ID in schema ${schema.name} (${schema.domainURI})`);
            // Log details about the problematic entry
            console.error('  Problematic class entry:', {
              name: classSchema.name || 'undefined',
              parent: classSchema.parent || 'undefined',
              propertyCount: classSchema.properties ? Object.keys(classSchema.properties).length : 0,
              // Include the first few properties as examples, if any
              sampleProperties: classSchema.properties ? 
                Object.keys(classSchema.properties).slice(0, 3).join(', ') : 'none',
              entry: JSON.stringify(classSchema).substring(0, 200) + '...' // Truncate to avoid excessive output
            });
            return;
          }
        }
        
        // Normal class registration
        this.classSchemas.set(classSchema.id, classSchema);
        this.currentLoadingSchema = schema;
        
        // Create short name for the class
        const shortName = this.createShortName(classSchema.id);
        this.shortNameToURI.set(shortName, classSchema.id);
        this.uriToShortName.set(classSchema.id, shortName);
        
        // Track parent-child relationships
        const parent = classSchema.parent;
        if (parent) {
          if (!this.parentChildMap.has(parent)) {
            this.parentChildMap.set(parent, []);
          }
          this.parentChildMap.get(parent)?.push(classSchema.id);
        }
        
        // Register properties
        if (classSchema.properties) {
          // Only log once per class for summary information
          let errorCount = 0;
          
          Object.entries(classSchema.properties).forEach(([propUri, propDef]) => {
            // Add context for property creation to help with debugging
            const propertyContext = {
              schemaName: schema.name,
              schemaURI: schema.domainURI,
              className: classSchema.name || 'unknown',
              classURI: classSchema.id,
              propertyName: propUri ? this.createShortName(propUri) : 'unknown',
              propertyURI: propUri
            };
            
            // Only log errors, not successful property creations
            if (!propUri) {
              errorCount++;
              console.error(`\nERROR: Null or undefined property URI detected in class ${classSchema.id}`);
              console.error(`  Schema: ${schema.name} (${schema.domainURI})`);
              console.error(`  Property type: ${propDef?.type || 'undefined'}`);
            }
            
            // Store the property definition
            this.propertiesMap.set(propUri, propDef);
          });
          
          // Only log a summary, not details
          if (errorCount > 0) {
            console.error(`  Found ${errorCount} property errors in class ${classSchema.id}`);
          }
        } else {
          console.info(`No properties found for class ${classSchema.id}`);
        }
      });
    } else {
      console.warn(`Schema ${schema.name} (${schema.domainURI}) has no classes defined`);
    }
  }

  /**
   * Extract a short name from a URI
   * @param uri Full URI of a class or property
   * @param context Optional context information for logging
   * @returns Short name
   */
  public createShortName(uri: string, context: any = null): string {
    // Handle undefined/null URIs more gracefully
    if (!uri) {
      // Enhanced error logging with context
      const schemaName = this.currentLoadingSchema?.name || 'unknown schema';
      const schemaUri = this.currentLoadingSchema?.domainURI || 'unknown domain';
      const className = context?.className || 'unknown class';
      const classId = context?.classData?.id || 'unknown class id';
      const propertyName = context?.propertyName || 'unknown property';
      
      console.error(`ERROR: Undefined URI detected in schema: ${schemaName} (${schemaUri})`);
      console.error(`  Class: ${className} (${classId})`);
      console.error(`  Property: ${propertyName}`);
      console.error(`  Context: ${JSON.stringify(context, null, 2)}`);
      return 'unknown';
    }
    
    // Normal processing for valid URIs
    try {
      // Extract the name part after the '#' symbol or the last part of the URI path
      let name = uri;
      if (uri.includes('#')) {
        const parts = uri.split('#');
        name = parts[1] || uri;
      } else {
        // Handle URIs with last segment format (e.g., http://example.com/ontology/MyClass)
        const pathParts = uri.split('/');
        if (pathParts.length > 0) {
          name = pathParts[pathParts.length - 1];
        }
      }
      
      // Transform property names with has/is prefixes
      // This matches the behavior of the JavaScript implementation
      if (name.startsWith('has') && name.length > 3) {
        // Convert hasProperty -> property (first letter lowercase)
        return name.substring(3, 4).toLowerCase() + name.substring(4);
      } else if (name.startsWith('is') && name.length > 2) {
        // Convert isProperty -> property (first letter lowercase)
        return name.substring(2, 3).toLowerCase() + name.substring(3);
      }
      
      return name;
    } catch (error) {
      console.warn(`Error parsing URI: ${uri}`, error);
    }
    
    // Fallback to returning the original URI
    return uri;
  }

  /**
   * Get a schema by name
   * @param name Schema name
   * @returns Schema object or undefined
   */
  public getSchema(name: string): VitalSchema | undefined {
    return this.schemas.get(name);
  }

  /**
   * Get a class schema by URI
   * @param uri Class URI
   * @returns Class schema or undefined
   */
  public getClassSchema(uri: string): VitalSchemaClass | undefined {
    return this.classSchemas.get(uri);
  }

  /**
   * Get a class schema by short name
   * @param shortName Class short name
   * @returns Class schema or undefined
   */
  public getClassSchemaByShortName(shortName: string): VitalSchemaClass | undefined {
    const uri = this.shortNameToURI.get(shortName);
    return uri ? this.classSchemas.get(uri) : undefined;
  }

  /**
   * Check if a class exists
   * @param classURI URI of the class
   * @returns true if class exists, false otherwise
   */
  public isClassLoaded(classURI: string): boolean {
    return this.classSchemas.has(classURI);
  }

  /**
   * Get all properties for a class, including inherited ones
   * @param classId URI of the class
   * @returns Object containing all properties
   */
  public getAllPropertiesForClass(classId: string): Record<string, VitalProperty> {
    const properties: Record<string, VitalProperty> = {};
    
    // First get the direct properties from the class schemas
    let currentClass = this.getClassSchema(classId);
    
    // Traverse class hierarchy to collect all properties
    while (currentClass) {
      Object.entries(currentClass.properties || {}).forEach(([key, value]) => {
        if (!properties[key]) {
          properties[key] = value;
        }
      });
      
      // Move up to parent class
      currentClass = this.getClassSchema(currentClass.parent);
    }
    
    // Add any properties that may have been added through the properties map
    // This is important for properties added via extends-only class entries
    for (const [key, value] of this.propertiesMap.entries()) {
      // Check if the property directly belongs to this class (via domainClassesURIs)
      const belongsToClass = value.domainClassesURIs?.includes(classId);
      
      if (belongsToClass && !properties[key]) {
        properties[key] = value;
      }
    }
    
    return properties;
  }

  /**
   * Create a new graph object of the specified type
   * @param options Object creation options
   * @returns New graph object
   */
  public graphObject(options: { type: string } | string): GraphObject {
    const typeURI = typeof options === 'string' ? options : options.type;
    
    // Resolve URI from short name if needed
    const resolvedTypeURI = this.shortNameToURI.get(typeURI) || typeURI;
    
    if (!this.isClassLoaded(resolvedTypeURI)) {
      throw new Error(`Class ${resolvedTypeURI} not found in loaded schemas`);
    }

    // Create base object
    const obj: GraphObject = {
      type: resolvedTypeURI,
      [`${VitalSchemaManager.VITAL_CORE_URI}vitaltype`]: resolvedTypeURI,
      types: [resolvedTypeURI]
    };

    // Add helper methods
    Object.defineProperties(obj, {
      set: {
        enumerable: false,
        value: (propertyName: string, value: any): void => {
          const fullPropertyName = this.resolvePropertyName(propertyName, resolvedTypeURI);
          if (fullPropertyName) {
            obj[fullPropertyName] = value;
          } else {
            throw new Error(`Property ${propertyName} not found for class ${resolvedTypeURI}`);
          }
        }
      },
      get: {
        enumerable: false,
        value: (propertyName: string): any => {
          const fullPropertyName = this.resolvePropertyName(propertyName, resolvedTypeURI);
          return fullPropertyName ? obj[fullPropertyName] : undefined;
        }
      }
    });

    return obj;
  }

  /**
   * Resolve a short property name to its full URI
   * @param propertyName Short property name
   * @param classURI Class URI
   * @returns Full property URI or undefined
   */
  private resolvePropertyName(propertyName: string, classURI: string): string | undefined {
    // If it's already a full URI, return as is
    if (propertyName.startsWith('http://')) {
      return propertyName;
    }
    
    // Generate possible variations of the property name to handle naming patterns
    const possibleNames = [propertyName];
    
    // Handle common property naming patterns: 
    // - If the name doesn't start with 'has' or 'is', add versions with these prefixes
    if (!propertyName.startsWith('has') && !propertyName.startsWith('is')) {
      // Convert first character to uppercase for camel case
      const capitalizedName = propertyName.charAt(0).toUpperCase() + propertyName.slice(1);
      possibleNames.push(`has${capitalizedName}`);
      possibleNames.push(`is${capitalizedName}`);
    }
    // - If the name starts with 'has' or 'is', also add version without prefix
    else if (propertyName.startsWith('has') && propertyName.length > 3) {
      const unprefixedName = propertyName.charAt(3).toLowerCase() + propertyName.slice(4);
      possibleNames.push(unprefixedName);
    }
    else if (propertyName.startsWith('is') && propertyName.length > 2) {
      const unprefixedName = propertyName.charAt(2).toLowerCase() + propertyName.slice(3);
      possibleNames.push(unprefixedName);
    }
    
    // Get all properties for the class
    const allProperties = this.getAllPropertiesForClass(classURI);
    
    // Try each possible name variant
    for (const nameTry of possibleNames) {
      // Find the matching property
      for (const [key, _] of Object.entries(allProperties)) {
        const shortName = this.createShortName(key);
        if (shortName === nameTry || key.endsWith(`#${nameTry}`)) {
          return key;
        }
      }
    }
    
    // If still not found, do a more exhaustive search in the properties map
    // This is necessary for properties added through extends-only class entries
    for (const nameTry of possibleNames) {
      for (const [key, propDef] of this.propertiesMap.entries()) {
        const shortName = this.createShortName(key);
        
        if (shortName === nameTry || key.endsWith(`#${nameTry}`)) {
          // Check if property is directly associated with this class
          if (propDef.domainClassesURIs?.includes(classURI)) {
            return key;
          }
          
          // Get all parent classes of the current class
          const superclasses = this.listSuperclasses(classURI);
          
          // Check if property is associated with any parent class
          for (const superclass of superclasses) {
            if (propDef.domainClassesURIs?.includes(superclass)) {
              return key;
            }
          }
        }
      }
    }

    return undefined;
  }

  /**
   * Get property metadata
   * @param propertyURI URI of the property
   * @returns Property metadata or undefined
   */
  public getPropertyMetadata(propertyURI: string): VitalProperty | undefined {
    for (const classSchema of this.classSchemas.values()) {
      if (classSchema.properties && propertyURI in classSchema.properties) {
        return classSchema.properties[propertyURI];
      }
    }
    return undefined;
  }

  /**
   * Validate a message against the loaded schemas
   * @param message Message to validate
   * @returns true if valid, false otherwise
   */
  public validateMessage(message: any): boolean {
    if (!message) {
      console.error('Message is null or undefined');
      return false;
    }

    // Handle array of messages
    if (Array.isArray(message)) {
      return message.every(item => this.validateSingleNode(item));
    }
    
    // Handle single message
    return this.validateSingleNode(message);
  }
  
  /**
   * Get information about all loaded domain schemas
   * @returns Array of domain information objects
   */
  public getLoadedDomains(): Array<{name: string, uri: string, version: string}> {
    const domains: Array<{name: string, uri: string, version: string}> = [];
    
    this.schemas.forEach((schema) => {
      domains.push({
        name: schema.name,
        uri: schema.domainURI,
        version: schema.version
      });
    });
    
    return domains;
  }
  
  /**
   * Get parent domains for a specific domain
   * @param domainUri URI of the domain to get parents for
   * @returns Array of parent domain URIs
   */
  public getImportedDomains(domainUri: string): string[] {
    const schema = this.getSchemaByUri(domainUri);
    if (!schema) {
      console.warn(`Domain not found: ${domainUri}`);
      return [];
    }
    
    return schema.parents || [];
  }
  
  /**
   * Get domains that depend on a specific domain
   * @param domainUri URI of the domain to find dependents for
   * @returns Array of dependent domain URIs
   */
  public getDependentDomains(domainUri: string): string[] {
    const dependents: string[] = [];
    
    this.schemas.forEach((schema) => {
      if (schema.parents && schema.parents.includes(domainUri)) {
        dependents.push(schema.domainURI);
      }
    });
    
    return dependents;
  }
  
  /**
   * Get a schema by its URI
   * @param domainUri URI of the domain
   * @returns Schema object or undefined
   */
  public getSchemaByUri(domainUri: string): VitalSchema | undefined {
    for (const schema of this.schemas.values()) {
      if (schema.domainURI === domainUri) {
        return schema;
      }
    }
    return undefined;
  }
  
  /**
   * List all superclasses of a given class
   * @param classURI URI of the class
   * @param direct If true, returns only the immediate parent
   * @returns Array of class URIs
   */
  public listSuperclasses(classURI: string, direct: boolean = false): string[] {
    const results: string[] = [];
    this._listSuperclasses(classURI, results, direct);
    return results;
  }
  
  /**
   * Internal helper for listSuperclasses
   * @param classURI URI of the class
   * @param results Array to collect results
   * @param direct If true, returns only the immediate parent
   * @param isTopLevel Whether this is the initial call (not recursive)
   */
  private _listSuperclasses(classURI: string, results: string[], direct: boolean = false, isTopLevel: boolean = true): void {
    // Skip self in results
    if (!isTopLevel) {
      if (!results.includes(classURI)) {
        results.push(classURI);
      }
    }
    
    const classSchema = this.getClassSchema(classURI);
    if (!classSchema || !classSchema.parent) return;
    
    // Add the immediate parent
    const parentURI = classSchema.parent;
    if (!results.includes(parentURI)) {
      results.push(parentURI);
    }
    
    // If direct is true, only return immediate parent
    if (direct) return;
    
    // Recursively add all ancestors
    this._listSuperclasses(parentURI, results, direct, false);
  }

  /**
   * List all subclasses of a given class
   * @param classURI URI of the class
   * @param direct If true, returns only immediate children
   * @returns Array of class URIs
   */
  public listSubclasses(classURI: string, direct: boolean = false): string[] {
    const results: string[] = [];
    
    // Use the parentChildMap to find immediate children
    const children = this.parentChildMap.get(classURI) || [];
    
    // Add all immediate children
    for (const childURI of children) {
      if (!results.includes(childURI)) {
        results.push(childURI);
      }
      
      // If direct is false, recursively add all descendants
      if (!direct) {
        const grandchildren = this.listSubclasses(childURI, false);
        for (const grandchild of grandchildren) {
          if (!results.includes(grandchild)) {
            results.push(grandchild);
          }
        }
      }
    }
    
    return results;
  }

  /**
   * List all superproperties (parent properties) of a given property
   * @param propertyURI URI of the property
   * @param direct If true, returns only the immediate parent properties
   * @returns Array of property URIs
   */
  public listSuperproperties(propertyURI: string, direct: boolean = false): string[] {
    const results: string[] = [];
    this._listSuperproperties(propertyURI, results, direct);
    return results;
  }
  
  /**
   * Internal helper for listSuperproperties
   * @param propertyURI URI of the property
   * @param results Array to collect results
   * @param direct If true, returns only immediate parents
   * @param isTopLevel Whether this is the initial call (not recursive)
   */
  private _listSuperproperties(propertyURI: string, results: string[], direct: boolean = false, isTopLevel: boolean = true): void {
    // Get property metadata
    const metadata = this.getPropertyMetadata(propertyURI);
    if (!metadata) return;
    
    // Check for parent properties
    const parentProperty = metadata.parentProperty;
    if (!parentProperty) return;
    
    // Add parent property
    if (!results.includes(parentProperty)) {
      results.push(parentProperty);
    }
    
    // If direct is true, only return immediate parent
    if (direct) return;
    
    // Recursively add all ancestors
    this._listSuperproperties(parentProperty, results, direct, false);
  }
  
  /**
   * List all subproperties (child properties) of a given property
   * @param propertyURI URI of the property
   * @param direct If true, returns only immediate children
   * @returns Array of property URIs
   */
  public listSubproperties(propertyURI: string, direct: boolean = false): string[] {
    const results: string[] = [];
    
    // Iterate through all properties to find those with this property as parent
    for (const [uri, metadata] of this.propertiesMap.entries()) {
      if ('parentProperty' in metadata && metadata.parentProperty === propertyURI) {
        if (!results.includes(uri)) {
          results.push(uri);
        }
        
        // If direct is false, recursively add all descendants
        if (!direct) {
          const childProperties = this.listSubproperties(uri, false);
          for (const childProperty of childProperties) {
            if (!results.includes(childProperty)) {
              results.push(childProperty);
            }
          }
        }
      }
    }
    
    return results;
  }

  /**
   * Validate a single node against the schema
   * @param node Node to validate
   * @returns true if valid, false otherwise
   */
  private validateSingleNode(node: any): boolean {
    // Check if node has a type
    if (!node.type) {
      console.error('Node is missing type property');
      return false;
    }

    // Get class schema
    const classSchema = this.getClassSchema(node.type);
    if (!classSchema) {
      console.error(`Schema not found for type: ${node.type}`);
      return false;
    }

    // Get all properties for class (including inherited ones)
    const allProperties = this.getAllPropertiesForClass(node.type);
    
    // Validate properties based on schema
    for (const [key, value] of Object.entries(node)) {
      // Skip URI, type, and types properties
      if (key === 'URI' || key === 'type' || key === 'types') {
        continue;
      }
      
      // Check if property exists in schema
      if (!allProperties[key]) {
        // Allow vital-core properties
        if (key.startsWith(VitalSchemaManager.VITAL_CORE_URI)) {
          continue;
        }
        console.warn(`Unknown property ${key} for type ${node.type}`);
        // Don't fail validation for unknown properties
        // return false;
      } else {
        // Validate property type
        if (!this.validatePropertyValue(value, allProperties[key])) {
          console.error(`Invalid value for property ${key} of type ${node.type}`);
          return false;
        }
      }
    }
    
    return true;
  }

  /**
   * Validate property value against property schema
   * @param value Property value
   * @param propertySchema Property schema
   * @returns true if valid, false otherwise
   */
  private validatePropertyValue(value: any, propertySchema: VitalProperty): boolean {
    if (value === null || value === undefined) {
      return true; // Allow null/undefined values
    }

    switch (propertySchema.type) {
      case 'string':
        return typeof value === 'string';
      case 'number':
      case 'integer':
      case 'float':
      case 'double':
        return typeof value === 'number';
      case 'boolean':
        return typeof value === 'boolean';
      case 'array':
        return Array.isArray(value);
      case 'object':
        return typeof value === 'object' && value !== null && !Array.isArray(value);
      case 'date':
        return value instanceof Date || typeof value === 'number';
      default:
        return true; // Unknown types pass validation
    }
  }

  /**
   * Print the domain hierarchy in a tree format
   * This shows the dependency relationships between domains in exact topological sort order
   */
  public prettyPrintDomainHierarchy(): void {
    // Use the cached topologically sorted schemas
    const sortedSchemas = this.getSortedSchemas();
    
    console.info('Domain hierarchy (exactly matches topological sort order):');
    
    // Build a domain depth map to track indentation levels
    const domainDepth = new Map<string, number>();
    
    // Initialize with vital-core at depth 0
    domainDepth.set(VitalSchemaManager.VITAL_CORE_DOMAIN_URI, 0);
    
    // Calculate depth for each domain based on dependency chain length from vital-core
    for (const schema of sortedSchemas) {
      if (schema.domainURI === VitalSchemaManager.VITAL_CORE_DOMAIN_URI) {
        continue; // already set to depth 0
      }
      
      // Determine depth based on parent domains
      if (schema.parents && schema.parents.length > 0) {
        // Find the maximum depth of any parent + 1
        let maxParentDepth = 0;
        for (const parentURI of schema.parents) {
          const parentDepth = domainDepth.get(parentURI) ?? 0;
          maxParentDepth = Math.max(maxParentDepth, parentDepth);
        }
        domainDepth.set(schema.domainURI, maxParentDepth + 1);
      } else if (schema.domainURI !== VitalSchemaManager.VITAL_DOMAIN_URI) {
        // Non-vital domains with no parents are set to depth 1 (direct children of vital-core)
        domainDepth.set(schema.domainURI, 1);
      }
    }
    
    // Print all domains in topological sort order with calculated indentation
    for (const schema of sortedSchemas) {
      const depth = domainDepth.get(schema.domainURI) ?? 0;
      const indent = '  '.repeat(depth);
      const shortName = schema.name || schema.domainURI.split('/').pop() || schema.domainURI;
      console.info(`${indent}${shortName} (${schema.version || 'undefined'}) - ${schema.domainURI}`);
    }
  }

  // Helper methods for error reporting and stack tracing have been removed per user request
}

// Export singleton instance for direct use
export const vitalSchema = VitalSchemaManager.getInstance();

// Export default instance
export default vitalSchema;
