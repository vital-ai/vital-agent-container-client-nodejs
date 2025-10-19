import { 
  generateUri, 
  generateUriFromClass, 
  generateUriFromGraphObject, 
  setGlobalUriConfig, 
  getGlobalUriConfig,
  graphObjectsToBase64,
  base64ToGraphObjects,
  UriGenerationConfig,
  GraphObjectMap
} from '../src/vital-utils';
import { v4 as uuidv4 } from 'uuid';

// Mock UUID to make tests deterministic
jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue('44aa640c-9484-4e0c-a5d9-42e79cadf873')
}));

describe('URI Generation Utils', () => {
  // Save original global config
  let originalConfig: UriGenerationConfig;
  
  beforeEach(() => {
    // Store original config
    originalConfig = getGlobalUriConfig();
    
    // Reset to default config before each test
    setGlobalUriConfig({
      defaultNamespace: 'http://vital.ai',
      defaultApplication: 'vital.ai',
      defaultClassSegment: 'vitalsigns'
    });

    // Reset the UUID mock
    (uuidv4 as jest.Mock).mockReturnValue('44aa640c-9484-4e0c-a5d9-42e79cadf873');
  });
  
  afterEach(() => {
    // Restore original config after each test
    setGlobalUriConfig(originalConfig);
  });

  test('should generate default URI with no parameters', () => {
    const uri = generateUri({});
    expect(uri).toBe('http://vital.ai/vital.ai/vitalsigns/44aa640c-9484-4e0c-a5d9-42e79cadf873');
  });

  test('should extract class name from class URI with hash', () => {
    const classUri = 'http://vital.ai/ontology/chat-ai#HaleyChatIntent';
    const uri = generateUriFromClass(classUri);
    expect(uri).toBe('http://vital.ai/vital.ai/HaleyChatIntent/44aa640c-9484-4e0c-a5d9-42e79cadf873');
  });

  test('should extract class name from class URI with slash', () => {
    const classUri = 'http://vital.ai/ontology/chat-ai/HaleyChatIntent';
    const uri = generateUriFromClass(classUri);
    expect(uri).toBe('http://vital.ai/vital.ai/HaleyChatIntent/44aa640c-9484-4e0c-a5d9-42e79cadf873');
  });

  test('should use default class segment when class URI is invalid', () => {
    const classUri = 'invalidClassUri';
    const uri = generateUriFromClass(classUri);
    expect(uri).toBe('http://vital.ai/vital.ai/vitalsigns/44aa640c-9484-4e0c-a5d9-42e79cadf873');
  });

  test('should extract class from graph object with vitaltype', () => {
    const graphObject: GraphObjectMap = {
      vitaltype: 'http://vital.ai/ontology/chat-ai#HaleyChatIntent',
      someProperty: 'someValue'
    };
    const uri = generateUriFromGraphObject(graphObject);
    expect(uri).toBe('http://vital.ai/vital.ai/HaleyChatIntent/44aa640c-9484-4e0c-a5d9-42e79cadf873');
  });

  test('should apply global configuration changes', () => {
    setGlobalUriConfig({
      defaultNamespace: 'http://example.org',
      defaultApplication: 'myapp',
      defaultClassSegment: 'resource'
    });
    
    const uri = generateUri({});
    expect(uri).toBe('http://example.org/myapp/resource/44aa640c-9484-4e0c-a5d9-42e79cadf873');
  });

  test('should apply per-call overrides', () => {
    const uri = generateUri({
      overrides: {
        defaultNamespace: 'http://override.com',
        defaultApplication: 'overrideapp',
        defaultClassSegment: 'custom'
      }
    });
    
    expect(uri).toBe('http://override.com/overrideapp/custom/44aa640c-9484-4e0c-a5d9-42e79cadf873');
  });

  test('should prioritize class URI over default segment', () => {
    const uri = generateUri({
      classUri: 'http://vital.ai/ontology/chat-ai#HaleyChatIntent',
      overrides: {
        defaultClassSegment: 'shouldNotBeUsed'
      }
    });
    
    expect(uri).toBe('http://vital.ai/vital.ai/HaleyChatIntent/44aa640c-9484-4e0c-a5d9-42e79cadf873');
  });
});

describe('Graph Object Serialization Utils', () => {
  // Sample graph objects for testing
  const sampleGraphObjects: GraphObjectMap[] = [
    {
      URI: 'http://vital.ai/vital.ai/vitalsigns/44aa640c-9484-4e0c-a5d9-42e79cadf873',
      'http://vital.ai/ontology/vital#hasAccountURI': 'urn:account_1',
      'http://vital.ai/ontology/vital-core#hasUsername': 'Marc Hadfield',
      'http://vital.ai/ontology/vital-aimp#hasUserID': 'marc@example.com',
      'http://vital.ai/ontology/vital-core#hasSessionID': '4756826688',
      'http://vital.ai/ontology/vital-aimp#hasAuthSessionID': '4756826688',
      'type': 'http://vital.ai/ontology/chat-ai#HaleyChatIntent',
      vitaltype: 'http://vital.ai/ontology/chat-ai#HaleyChatIntent',
      'types': [
        'http://vital.ai/ontology/chat-ai#HaleyChatIntent'
      ]
    },
    {
      URI: 'http://vital.ai/vital.ai/vitalsigns/e715f8f3-d09b-48f2-ae7a-2663c3b96971',
      'http://vital.ai/ontology/chat-ai#hasChatTextMessage': 'hello',
      'type': 'http://vital.ai/ontology/chat-ai#HaleyChatUserMessage',
      vitaltype: 'http://vital.ai/ontology/chat-ai#HaleyChatUserMessage',
      'types': [
        'http://vital.ai/ontology/chat-ai#HaleyChatUserMessage'
      ]
    }
  ];

  test('should serialize graph objects to uncompressed base64 string', () => {
    const base64String = graphObjectsToBase64(sampleGraphObjects);
    expect(base64String.charAt(0)).toBe('U'); // Uncompressed marker
    expect(typeof base64String).toBe('string');
    expect(base64String.length).toBeGreaterThan(10);
  });

  test('should serialize graph objects to compressed base64 string', () => {
    const base64String = graphObjectsToBase64(sampleGraphObjects, { compress: true });
    expect(base64String.charAt(0)).toBe('Z'); // Compressed marker
    expect(typeof base64String).toBe('string');
    expect(base64String.length).toBeGreaterThan(10);
  });

  test('should deserialize uncompressed base64 string back to graph objects', () => {
    const base64String = graphObjectsToBase64(sampleGraphObjects);
    const deserializedObjects = base64ToGraphObjects(base64String);
    
    expect(Array.isArray(deserializedObjects)).toBe(true);
    expect(deserializedObjects.length).toBe(sampleGraphObjects.length);
    
    // Deep comparison of objects
    expect(JSON.stringify(deserializedObjects)).toBe(JSON.stringify(sampleGraphObjects));
  });

  test('should deserialize compressed base64 string back to graph objects', () => {
    const base64String = graphObjectsToBase64(sampleGraphObjects, { compress: true });
    const deserializedObjects = base64ToGraphObjects(base64String);
    
    expect(Array.isArray(deserializedObjects)).toBe(true);
    expect(deserializedObjects.length).toBe(sampleGraphObjects.length);
    
    // Deep comparison of objects
    expect(JSON.stringify(deserializedObjects)).toBe(JSON.stringify(sampleGraphObjects));
  });

  test('should throw error on invalid base64 input', () => {
    expect(() => base64ToGraphObjects('invalid')).toThrow();
  });

  test('should throw error on unknown compression marker', () => {
    expect(() => base64ToGraphObjects('X' + 'invalidBase64==')).toThrow(/Unknown compression marker/);
  });

  test('should throw error if deserialized data is not an array', () => {
    // Create a base64 string of an object (not an array)
    const notArrayJson = JSON.stringify({ notAnArray: true });
    const buffer = Buffer.from(notArrayJson, 'utf8');
    const notArrayBase64 = 'U' + buffer.toString('base64');
    
    expect(() => base64ToGraphObjects(notArrayBase64)).toThrow(/not an array/);
  });

  test('should handle serialization/deserialization of empty array', () => {
    const emptyArray: GraphObjectMap[] = [];
    const base64String = graphObjectsToBase64(emptyArray);
    const deserializedObjects = base64ToGraphObjects(base64String);
    
    expect(Array.isArray(deserializedObjects)).toBe(true);
    expect(deserializedObjects.length).toBe(0);
  });

  test('should handle real-world example from agent-connect-script.ts', () => {
    // This is based on the example found in agent-connect-script.ts
    const base64Sample = "WwogIHsKICAgICJVUkkiOiAiaHR0cDovL3ZpdGFsLmFpL3ZpdGFsLmFpL3ZpdGFsc2lnbnMvNThjYWYwN2QtZDRhYy00Njc1LTliZTAtZDQzMWJlNmRkMzY3IiwKICAgICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNoYXNIYWxleUNoYXRJbnRlcmFjdGlvbk1vZGVsVHlwZVVSSSI6ICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNIYWxleUNoYXRJbnRlcmFjdGlvbk1vZGVsVHlwZV9PcGVuQUlfQ2hhdEdQVF80byIsCiAgICAiaHR0cDovL3ZpdGFsLmFpL29udG9sb2d5L2NoYXQtYWkjaGFzSGFsZXlDaGF0SW50ZXJhY3Rpb25UeXBlVVJJIjogImh0dHA6Ly92aXRhbC5haS9vbnRvbG9neS9jaGF0LWFpI0hhbGV5Q2hhdEludGVyYWN0aW9uX0NIQVRfS0ciLAogICAgInR5cGUiOiAiaHR0cDovL3ZpdGFsLmFpL29udG9sb2d5L2NoYXQtYWkjSGFsZXlDaGF0SW50ZXJhY3Rpb24iLAogICAgImh0dHA6Ly92aXRhbC5haS9vbnRvbG9neS92aXRhbC1jb3JlI3ZpdGFsdHlwZSI6ICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNIYWxleUNoYXRJbnRlcmFjdGlvbiIsCiAgICAidHlwZXMiOiBbCiAgICAgICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNIYWxleUNoYXRJbnRlcmFjdGlvbiIKICAgIF0KICB9Cl0=";
    
    // Add 'U' prefix to make it compatible with our format since the example doesn't have a prefix
    const compatibleBase64 = 'U' + base64Sample;
    
    try {
      // Try to deserialize the real-world example
      const deserializedObjects = base64ToGraphObjects(compatibleBase64);
      
      expect(Array.isArray(deserializedObjects)).toBe(true);
      expect(deserializedObjects.length).toBe(1);
      
      // Check specific properties from the known example
      expect(deserializedObjects[0].URI).toBe("http://vital.ai/vital.ai/vitalsigns/58caf07d-d4ac-4675-9be0-d431be6dd367");
      expect(deserializedObjects[0].type).toBe("http://vital.ai/ontology/chat-ai#HaleyChatInteraction");
      
    } catch (error) {
      // This should not throw an error
      fail(`Failed to deserialize real-world example: ${error}`);
    }
  });
});
