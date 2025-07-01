import { VitalAgentClient, ConnectionStatus } from '../src/client';
import {
  TestWebSocketServer,
  createTestServer,
  waitForSocketState,
  getRandomServerUrl,
  createTestId
} from './utils/websocket-test-utils';

// Add test logging for visibility
export const log = (message: string): void => {
  console.log(`TEST LOG: ${message}`);
};

// Default Jest timeout for tests
export const setupTestTimeout = (): void => {
  jest.setTimeout(5000); // Short timeout for faster test feedback
};

// Setup and teardown helpers for tests
export interface TestContext {
  client?: VitalAgentClient;
  server?: TestWebSocketServer;
  testUrl: string;
  testId: string;
}

// Common before each setup
export const setupTest = (): TestContext => {
  const testId = createTestId();
  log(`Setting up test environment (${testId})`);
  
  // Create a random URL for testing
  const testUrl = getRandomServerUrl();
  log(`Using test URL: ${testUrl}`);
  
  return {
    testId,
    testUrl
  };
};

// Common after each cleanup
export const teardownTest = async (context: TestContext): Promise<void> => {
  const { client, server, testId } = context;
  log(`Cleaning up test environment (${testId})`);
  
  try {
    // Explicitly disconnect client first if it exists
    if (client) {
      log(`Closing WebSocket client (${testId})`);
      try {
        // Remove all listeners to prevent leaks
        client.removeAllListeners();
        // Disconnect with short timeout
        await Promise.race([
          client.disconnect().catch(() => { /* ignore errors */ }),
          new Promise(resolve => setTimeout(resolve, 300))
        ]);
      } catch (e) {
        log(`Client disconnect error (handled): ${e instanceof Error ? e.message : String(e)}`);
      }
      context.client = undefined;
      log('WebSocket client cleanup complete');
    }
    
    // Then close server if it exists
    if (server) {
      log(`Closing WebSocket server (${testId})`);
      try {
        // Close server with short timeout
        await Promise.race([
          server.close().catch(() => { /* ignore errors */ }),
          new Promise(resolve => setTimeout(resolve, 300))
        ]);
      } catch (error) {
        log(`Server close error (handled): ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        context.server = undefined;
        log('WebSocket server cleanup complete');
      }
    }
  } catch (error) {
    log(`Final cleanup error (handled): ${error instanceof Error ? error.message : String(error)}`);
    // Forcibly clear references even if there were errors
    context.client = undefined;
    context.server = undefined;
  }
};
