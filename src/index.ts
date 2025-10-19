/**
 * VITAL Agent Node.js Client
 * A WebSocket client for connecting to VITAL Agent services with JSON message support
 */

import { VitalAgentClient, ClientOptions, ConnectionStatus } from './client';
import {
  generateUri,
  generateUriFromClass,
  generateUriFromGraphObject,
  setGlobalUriConfig,
  getGlobalUriConfig,
  UriGenerationConfig,
  UriOverrides,
  GraphObjectMap,
  graphObjectsToBase64,
  base64ToGraphObjects,
  SerializationOptions
} from './vital-utils';

export {
  // Client exports
  VitalAgentClient,
  ClientOptions,
  ConnectionStatus,
  
  // URI utility exports
  generateUri,
  generateUriFromClass,
  generateUriFromGraphObject,
  setGlobalUriConfig,
  getGlobalUriConfig,
  UriGenerationConfig,
  UriOverrides,
  GraphObjectMap,
  
  // Serialization utility exports
  graphObjectsToBase64,
  base64ToGraphObjects,
  SerializationOptions
};

// Default export for easier importing
export default VitalAgentClient;
