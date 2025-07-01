import { VitalAgentClient, ConnectionStatus } from '../src/client';
import {
  TestWebSocketServer,
  createTestServer
} from './utils/websocket-test-utils';
import { 
  log, 
  setupTestTimeout, 
  setupTest, 
  teardownTest, 
  TestContext 
} from './common-test-setup';

// Set global Jest timeout for these tests
setupTestTimeout();

describe('VitalAgentClient Messaging', () => {
  let context: TestContext;
  
  // Setup before each test
  beforeEach(() => {
    context = setupTest();
  });

  // Clean up after each test
  afterEach(async () => {
    await teardownTest(context);
  });

  describe('send', () => {
    it('should send a message successfully', async () => {
      // Create a test server
      log('Creating test server for send test');
      context.server = await createTestServer({ jsonProtocol: true });
      context.testUrl = context.server.url;
      log(`Server created at ${context.testUrl}`);
      
      // Initialize client
      context.client = new VitalAgentClient({
        connectionTimeout: 5000 // Increased timeout for tests
      });
      
      // Test message
      const testMessage = { type: 'test', content: 'Hello server' };
      log(`Test message content: ${JSON.stringify(testMessage)}`);
      
      try {
        // Set up connection tracking
        const connectionPromise = new Promise<void>(resolve => {
          if (!context.client) {
            throw new Error('Client is undefined');
          }
          context.client.on('connected', () => {
            log('Client emitted connected event');
            resolve();
          });
        });
        
        // Important: Set up server connection monitoring BEFORE connecting
        log('Setting up server connection monitoring');
        if (!context.server) {
          throw new Error('Server is undefined');
        }
        const serverConnectionPromise = context.server.nextConnection(5000); // Increased timeout
        
        // Now connect client to server
        log(`Connecting client to ${context.testUrl}`);
        if (!context.client) {
          throw new Error('Client is undefined');
        }
        await context.client.connect(context.testUrl);
        await connectionPromise;
        
        // Wait for a client connection on the server
        log('Waiting for server to receive connection');
        const serverConnection = await serverConnectionPromise;
        
        // Set up message receipt tracking on server
        const serverMessagePromise = new Promise<any>(resolve => {
          serverConnection.on('message', (data: any) => {
            log('Server received message from client');
            // Parse the message
            const message = JSON.parse(typeof data === 'string' ? data : data.toString());
            resolve(message);
          });
        });
        
        // Send the message
        log('Sending test message');
        if (!context.client) {
          throw new Error('Client is undefined');
        }
        await context.client.send(testMessage);
        
        // Wait for server to receive the message
        log('Waiting for server to receive message');
        const receivedMessage = await serverMessagePromise;
        
        // Verify message content
        log('Verifying received message content');
        expect(receivedMessage).toEqual(testMessage);
        log('Send test passed');
      } catch (error) {
        log(`Send test error: ${error instanceof Error ? error.message : String(error)}`);
        throw error;
      }
    });

    it('should handle serialization errors', async () => {
      // Create a test server
      log('Creating test server for JSON serialization error test');
      context.server = await createTestServer({ jsonProtocol: true });
      context.testUrl = context.server.url;
      log(`Server created at ${context.testUrl}`);
      
      // Initialize client with server URL and longer timeout for tests
      context.client = new VitalAgentClient({
        connectionTimeout: 5000 // Increased timeout for tests
      });
      
      log('Testing JSON serialization error handling');
      
      try {
        // Set up connection tracking
        const connectionPromise = new Promise<void>(resolve => {
          if (!context.client) {
            throw new Error('Client is undefined');
          }
          context.client.on('connected', () => {
            log('Client emitted connected event');
            resolve();
          });
        });
        
        // Important: Set up server connection monitoring BEFORE connecting
        log('Setting up server connection monitoring');
        if (!context.server) {
          throw new Error('Server is undefined');
        }
        const serverConnectionPromise = context.server.nextConnection(5000); // Increased timeout
        
        // Connect client to server
        log(`Connecting client to ${context.testUrl}`);
        if (!context.client) {
          throw new Error('Client is undefined');
        }
        await context.client.connect(context.testUrl);
        await connectionPromise;
        
        // Wait for a client connection on the server
        log('Waiting for server to receive connection');
        await serverConnectionPromise;
        
        // Try to send an invalid message (something that can't be serialized to JSON)
        log('Attempting to send circular reference object');
        const invalidMessage = {
          circular: {}
        };
        // Create a circular reference to cause JSON.stringify to fail
        invalidMessage.circular = invalidMessage;
        
        // This should throw an error
        try {
          if (!context.client) {
            throw new Error('Client is undefined');
          }
          await context.client.send(invalidMessage);
          fail('Should have thrown an error for circular reference');
        } catch (err: unknown) {
          // This is expected
          expect(err).toBeDefined();
          const errorMessage = err instanceof Error ? err.message : String(err);
          log(`Expected send error caught: ${errorMessage}`);
        }
        
        log('JSON serialization error test passed');
      } catch (error) {
        log(`JSON serialization error test failed: ${error instanceof Error ? error.message : String(error)}`);
        throw error;
      }
    });
  });

  describe('message handling', () => {
    it('should handle incoming messages correctly', async () => {
      // Create a test server
      log('Creating test server for message handling test');
      context.server = await createTestServer({ jsonProtocol: true });
      context.testUrl = context.server.url;
      log(`Server created at ${context.testUrl}`);
      
      // Create client with increased timeout
      context.client = new VitalAgentClient({
        connectionTimeout: 5000 // Increased timeout for tests
      });
      
      // Test message from server to client
      const testMessage = { type: 'test', content: 'Hello client' };
      log(`Test message content: ${JSON.stringify(testMessage)}`);
      
      try {
        // Setup message listener
        const messagePromise = new Promise<any>(resolve => {
          if (!context.client) {
            throw new Error('Client is undefined');
          }
          context.client.on('message', (message) => {
            log('Client received message from server');
            resolve(message);
          });
        });
        
        // Set up connection tracking
        const connectionPromise = new Promise<void>(resolve => {
          if (!context.client) {
            throw new Error('Client is undefined');
          }
          context.client.on('connected', () => {
            log('Client emitted connected event');
            resolve();
          });
        });
        
        // Important: Set up server connection monitoring BEFORE connecting
        log('Setting up server connection monitoring');
        if (!context.server) {
          throw new Error('Server is undefined');
        }
        const serverConnectionPromise = context.server.nextConnection(5000); // Increased timeout
        
        // Connect client to server
        log(`Connecting client to ${context.testUrl}`);
        if (!context.client) {
          throw new Error('Client is undefined');
        }
        await context.client.connect(context.testUrl);
        await connectionPromise;
        
        // Wait for a client connection on the server
        log('Waiting for server to receive connection');
        const serverConnection = await serverConnectionPromise;
        
        // Send message from server to client
        log('Sending message from server to client');
        serverConnection.send(JSON.stringify(testMessage));
        
        // Wait for client to receive message
        log('Waiting for client to receive message');
        const receivedMessage = await messagePromise;
        
        // Verify message content
        log('Verifying received message content');
        expect(receivedMessage).toEqual(testMessage);
        log('Message handling test passed');
      } catch (error) {
        log(`Message handling test error: ${error instanceof Error ? error.message : String(error)}`);
        throw error;
      }
    });
  });
});
