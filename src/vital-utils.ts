/**
 * Utility functions for VITAL.ai
 */
import { v4 as uuidv4 } from 'uuid';
import * as zlib from 'zlib';

// Configuration interface for URI generation
export interface UriGenerationConfig {
  /** Default namespace to use for generated URIs */
  defaultNamespace: string;
  /** Default application name to use for generated URIs */
  defaultApplication: string;
  /** Default class name or segment to use when class name cannot be determined */
  defaultClassSegment: string;
}

// Global configuration for URI generation with defaults
let globalUriConfig: UriGenerationConfig = {
  defaultNamespace: 'http://vital.ai',
  defaultApplication: 'vital.ai',
  defaultClassSegment: 'vitalsigns'
};

/**
 * Set global configuration for URI generation
 * 
 * @param config Configuration options to set globally
 */
export function setGlobalUriConfig(config: Partial<UriGenerationConfig>): void {
  globalUriConfig = {
    ...globalUriConfig,
    ...config
  };
}

/**
 * Get current global URI generation configuration
 * 
 * @returns The current global URI configuration
 */
export function getGlobalUriConfig(): UriGenerationConfig {
  return { ...globalUriConfig };
}

/**
 * Interface for overriding URI generation parameters for a single call
 */
export interface UriOverrides extends Partial<UriGenerationConfig> {
  // Any additional overrides specific to a single call
}

/**
 * Type for objects that have a vitaltype property indicating their class URI
 */
export interface GraphObjectMap {
  vitaltype: string;
  [key: string]: any;
}

/**
 * Extracts class name from a class URI
 * 
 * @param classUri Full class URI like 'http://vital.ai/ontology/chat-ai#HaleyChatIntent'
 * @returns The class name segment (e.g., 'HaleyChatIntent') or null if parsing fails
 */
export function extractClassName(classUri: string): string | null {
  if (!classUri) return null;
  
  // Handle both # and / separators for class names in URIs
  const hashIndex = classUri.lastIndexOf('#');
  if (hashIndex !== -1 && hashIndex < classUri.length - 1) {
    return classUri.substring(hashIndex + 1);
  }
  
  const slashIndex = classUri.lastIndexOf('/');
  if (slashIndex !== -1 && slashIndex < classUri.length - 1) {
    return classUri.substring(slashIndex + 1);
  }
  
  return null;
}

/**
 * Generates a unique URI in the VITAL.ai format
 * 
 * Format: http://namespace/application/classname/uuid
 * 
 * @param options Generation options
 * @param options.classUri Optional class URI to extract class name from
 * @param options.graphObject Optional graph object with vitaltype to extract class name from
 * @param options.overrides Optional overrides for namespace, application, and class segment
 * @returns A unique URI string
 */
export function generateUri(options: {
  classUri?: string;
  graphObject?: GraphObjectMap;
  overrides?: UriOverrides;
}): string {
  const { classUri, graphObject, overrides = {} } = options;
  
  // Apply overrides on top of global defaults
  const config = {
    ...globalUriConfig,
    ...overrides
  };
  
  // Determine the class segment
  let classSegment = config.defaultClassSegment;
  
  // Try to extract from classUri if provided
  if (classUri) {
    const extractedClass = extractClassName(classUri);
    if (extractedClass) {
      classSegment = extractedClass;
    }
  } 
  // Otherwise try to extract from graphObject if provided
  else if (graphObject?.vitaltype) {
    const extractedClass = extractClassName(graphObject.vitaltype);
    if (extractedClass) {
      classSegment = extractedClass;
    }
  }
  
  // Generate a UUID for the unique part
  const uniqueId = uuidv4();
  
  // Construct the URI
  return `${config.defaultNamespace}/${config.defaultApplication}/${classSegment}/${uniqueId}`;
}

/**
 * Convenience wrapper to generate a URI from a class URI
 * 
 * @param classUri The full class URI
 * @param overrides Optional configuration overrides
 * @returns A unique URI string
 */
export function generateUriFromClass(classUri: string, overrides?: UriOverrides): string {
  return generateUri({ classUri, overrides });
}

/**
 * Convenience wrapper to generate a URI from a graph object with vitaltype
 * 
 * @param graphObject Object with vitaltype property
 * @param overrides Optional configuration overrides
 * @returns A unique URI string
 */
export function generateUriFromGraphObject(graphObject: GraphObjectMap, overrides?: UriOverrides): string {
  return generateUri({ graphObject, overrides });
}

/**
 * Options for graph object serialization
 */
export interface SerializationOptions {
  /** Whether to compress the serialized data using zlib deflate */
  compress?: boolean;
}

/**
 * Serializes an array of graph objects to a base64 string
 * 
 * @param graphObjects Array of graph objects to serialize
 * @param options Optional serialization options
 * @returns Base64 encoded string representation
 */
export function graphObjectsToBase64(graphObjects: GraphObjectMap[], options: SerializationOptions = {}): string {
  // Convert the graph objects to a JSON string
  const jsonString = JSON.stringify(graphObjects);
  
  // Encode as Buffer
  const buffer = Buffer.from(jsonString, 'utf8');
  
  // Compress if requested
  if (options.compress) {
    // Use zlib deflate for compression
    const compressed = zlib.deflateSync(buffer);
    
    // Convert to base64 and prepend a marker indicating compression was used
    return 'Z' + compressed.toString('base64');
  }
  
  // Return as base64 with no compression marker
  return 'U' + buffer.toString('base64');
}

/**
 * Deserializes a base64 string back to an array of graph objects
 * 
 * @param base64String Base64 encoded string to deserialize
 * @returns Array of graph objects
 * @throws Error if deserialization fails
 */
export function base64ToGraphObjects(base64String: string): GraphObjectMap[] {
  if (!base64String || base64String.length < 2) {
    throw new Error('Invalid base64 string: too short');
  }
  
  // Check prefix to determine if data is compressed
  const compressionMarker = base64String.charAt(0);
  const encodedData = base64String.substring(1);
  
  try {
    // Convert from base64 to Buffer
    const buffer = Buffer.from(encodedData, 'base64');
    
    let jsonString: string;
    if (compressionMarker === 'Z') {
      // Data is compressed, inflate it first
      const decompressed = zlib.inflateSync(buffer);
      jsonString = decompressed.toString('utf8');
    } else if (compressionMarker === 'U') {
      // Data is not compressed
      jsonString = buffer.toString('utf8');
    } else {
      throw new Error(`Unknown compression marker: ${compressionMarker}`);
    }
    
    // Parse the JSON string back to graph objects
    const graphObjects = JSON.parse(jsonString);
    
    // Validate that we got an array
    if (!Array.isArray(graphObjects)) {
      throw new Error('Deserialized data is not an array');
    }
    
    return graphObjects;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to deserialize base64 string: ${error.message}`);
    }
    throw new Error('Unknown error during deserialization');
  }
}
