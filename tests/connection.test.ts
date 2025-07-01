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

describe('VitalAgentClient Connection', () => {
  let context: TestContext;
  
  // Setup before each test
  beforeEach(() => {
    context = setupTest();
  });

  // Clean up after each test
  afterEach(async () => {
    await teardownTest(context);
  });

  // Test for successful connection
  it('should establish a connection successfully', async () => {
    // Create a fresh WebSocket server
    log('Creating new WebSocket server for connection test');
    context.server = await createTestServer({ jsonProtocol: true });
    context.testUrl = context.server.url; // Use actual server URL with dynamically assigned port
    
    // Verify server is ready and log URL for debugging
    log(`Server created at ${context.server.url}`);
    expect(context.server.url).toContain('ws://localhost:');
    expect(parseInt(context.server.url.split(':')[2])).toBeGreaterThan(0); // Verify port was assigned
    
    // Create client with longer connection timeout for reliability
    log('Creating client with appropriate timeout');
    context.client = new VitalAgentClient({
      connectionTimeout: 5000 // 5 seconds timeout for reliability
    });
    
    // Set up connection tracking
    log('Setting up connection tracking');
    const connectedPromise = new Promise<void>(resolve => {
      if (!context.client) {
        throw new Error('Client is undefined');
      }
      context.client.once('connected', () => {
        log('Client emitted connected event');
        resolve();
      });
    });
    
    try {
      // Start connection process first
      log('Starting connection process');
      const connectionPromise = context.client.connect(context.testUrl);
      
      // Wait for server to receive the connection
      log('Waiting for server to register connection');
      if (!context.server) {
        throw new Error('Server is undefined');
      }
      await Promise.race([
        context.server.nextConnection(3000),
        new Promise<never>((_, reject) => setTimeout(() => reject(new Error('Server connection timeout')), 3000))
      ]);
      
      // Wait for connection to complete
      log('Waiting for connection to complete');
      await connectionPromise;
      
      // Wait for connected event
      log('Waiting for connected event');
      await connectedPromise;
      
      // Verify connected status
      log('Verifying connection status');
      if (!context.client) {
        throw new Error('Client is undefined');
      }
      expect(context.client.getStatus()).toBe(ConnectionStatus.CONNECTED);
      
      log('Connection test passed');
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      log(`Connection test failed: ${errorMessage}`);
      throw error;
    }
  });

  it('should fail to connect if error occurs', async () => {
    // Close the existing server
    log('Closing server to force connection error');
    if (context.server) {
      await context.server.close();
      // Server is now closed
    }
    
    // Create client
    log('Creating client for connection error test');
    context.client = new VitalAgentClient({
      connectionTimeout: 2000 // Short timeout for faster tests
    });
    
    // Set up error listener
    log('Setting up error event listener');
    const errorSpy = jest.fn();
    if (!context.client) {
      throw new Error('Client is undefined');
    }
    context.client.on('error', errorSpy);
    
    // Create a test URL for a non-existent server
    const errorTestUrl = 'ws://localhost:54321'; // Use a port that's likely not in use
    log(`Using error test URL: ${errorTestUrl}`);
    
    // Try to connect - should fail
    log('Attempting connection that should fail');
    const connectPromise = context.client.connect(errorTestUrl);
    
    // Verify connection fails with error
    log('Verifying connection error');
    await expect(connectPromise).rejects.toThrow();
    expect(errorSpy).toHaveBeenCalled();
    log('Connection error test passed');
  });

  it('should handle connection timeout', async () => {
    // Create a client with very short timeout
    log('Creating client with short timeout');
    context.client = new VitalAgentClient({
      connectionTimeout: 1000 // Short timeout for test, but not too short
    });
    
    // Set up an error event listener to handle errors
    if (!context.client) {
      throw new Error('Client is undefined');
    }
    const errorSpy = jest.fn();
    context.client.on('error', errorSpy);
    
    // Use a timeout server URL
    // This is a valid address that won't respond, causing a timeout
    // Using the TEST_SERVER_URL from the port that we know doesn't have a server
    const timeoutServerUrl = 'ws://localhost:65000';
    log(`Using timeout test URL: ${timeoutServerUrl}`);
    
    try {
      // Try to connect - should time out
      log('Attempting connection that should timeout');
      const connectPromise = context.client.connect(timeoutServerUrl);
      
      // Verify timeout error
      log('Verifying timeout error');
      await expect(connectPromise).rejects.toThrow();
      expect(errorSpy).toHaveBeenCalled();
      log('Timeout test passed');
    } catch (error) {
      log(`Timeout test failed: ${error instanceof Error ? error.message : String(error)}`);
      throw error;
    }
  });
});
