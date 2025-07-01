import { VitalAgentClient, ConnectionStatus } from '../src/client';
import {
  TestWebSocketServer,
  createTestServer,
  waitForSocketState
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

describe('VitalAgentClient Disconnect', () => {
  let context: TestContext;
  
  // Setup before each test
  beforeEach(() => {
    context = setupTest();
  });

  // Clean up after each test
  afterEach(async () => {
    await teardownTest(context);
  });

  it('should close connection gracefully', async () => {
    // Create a fresh WebSocket server
    log('Creating new WebSocket server for disconnect test');
    context.server = await createTestServer({ jsonProtocol: true });
    context.testUrl = context.server.url;
    log(`Server created at ${context.testUrl}`);
    
    // Create client with longer connection timeout
    log('Creating client for disconnect test');
    context.client = new VitalAgentClient({
      connectionTimeout: 5000 // Increased timeout for more reliability
    });
    
    try {
      // Set up event listeners
      log('Setting up event listeners');
      const disconnectSpy = jest.fn();
      if (!context.client) {
        throw new Error('Client is undefined');
      }
      context.client.on('disconnected', disconnectSpy);
      
      // Set up connection tracking
      const connectionPromise = new Promise<void>(resolve => {
        if (!context.client) {
          throw new Error('Client is undefined');
        }
        context.client.once('connected', () => {
          log('Client emitted connected event');
          resolve();
        });
      });
      
      // Set up server connection monitoring BEFORE connecting
      log('Setting up server connection monitoring');
      if (!context.server) {
        throw new Error('Server is undefined');
      }
      const serverConnectionPromise = context.server.nextConnection(5000); // Increased timeout
      
      // Connect to server
      log(`Connecting client to ${context.testUrl}`);
      if (!context.client) {
        throw new Error('Client is undefined');
      }
      await context.client.connect(context.testUrl);
      
      // Wait for connection events
      log('Waiting for connected event');
      await connectionPromise;
      
      // Wait for server to register connection
      log('Waiting for server to receive connection');
      const serverConnection = await serverConnectionPromise;
      log('Server received connection');
      
      // Verify connected
      log('Verifying connected status');
      if (!context.client) {
        throw new Error('Client is undefined');
      }
      expect(context.client.getStatus()).toBe(ConnectionStatus.CONNECTED);
      
      // Now try to disconnect gracefully
      log('Disconnecting client');
      
      // Set up disconnect promise
      const disconnectPromise = new Promise<void>(resolve => {
        if (!context.client) {
          throw new Error('Client is undefined');
        }
        context.client.once('disconnected', () => {
          log('Client emitted disconnected event');
          resolve();
        });
      });
      
      // Initiate disconnect
      await context.client.disconnect();
      
      // Wait for disconnect event
      log('Waiting for disconnect event');
      await Promise.race([
        disconnectPromise,
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Disconnect event timeout')), 3000))
      ]);
      log('Disconnect event received');
      
      expect(disconnectSpy).toHaveBeenCalled();
      log('Disconnect test passed');
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      log(`Disconnect test failed: ${errorMessage}`);
      throw error;
    }
  });
});
