import { WebSocketServer, WebSocket } from 'ws';
import { EventEmitter } from 'events';
import { AddressInfo } from 'net';
import { v4 as uuidv4 } from 'uuid';

/**
 * A message received by the test server
 */
interface ReceivedMessage {
  data: any;
  client: WebSocket;
  raw: string;
}

/**
 * Options for creating a TestWebSocketServer
 */
interface TestServerOptions {
  port?: number;
  jsonProtocol?: boolean;
}

/**
 * A WebSocket server for testing with enhanced features for test control
 */
export class TestWebSocketServer extends EventEmitter {
  private server: WebSocketServer;
  private clients: Set<WebSocket> = new Set();
  private receivedMessages: ReceivedMessage[] = [];
  private jsonProtocol: boolean;
  public url: string;

  /**
   * Create a new TestWebSocketServer
   * @param options Configuration options
   */
  constructor(options: TestServerOptions = {}) {
    super();
    
    // Create WebSocketServer on any available port if none specified
    this.server = new WebSocketServer({
      port: options.port || 0, // Port 0 means use any available port
    });
    
    // Store configuration options
    this.jsonProtocol = options.jsonProtocol ?? false;
    
    // Set up event handlers
    this.server.on('connection', this.handleConnection.bind(this));
    this.server.on('error', (error) => this.emit('error', error));
    
    // Generate the server URL based on the port that was assigned
    const address = this.server.address() as AddressInfo;
    this.url = `ws://localhost:${address.port}`;
  }

  /**
   * Handle incoming WebSocket connections
   * @param client The connected WebSocket client
   */
  private handleConnection(client: WebSocket): void {
    // Keep track of connected clients
    this.clients.add(client);
    
    // Forward the connection event
    this.emit('connection', client);
    
    // Set up client event handlers
    client.on('message', (data, isBinary) => {
      // Parse message if it's JSON and jsonProtocol is enabled
      const raw = data.toString();
      let parsed: any = raw;
      
      if (this.jsonProtocol) {
        try {
          parsed = JSON.parse(raw);
        } catch (error) {
          // If parsing fails, emit an error but still store the message
          this.emit('jsonError', { error, data: raw, client });
        }
      }
      
      // Store the message
      const message: ReceivedMessage = {
        data: parsed,
        client,
        raw,
      };
      
      this.receivedMessages.push(message);
      
      // Forward the message event
      this.emit('message', message);
    });

    // Handle client disconnect
    client.on('close', () => {
      this.clients.delete(client);
      this.emit('clientDisconnected', client);
    });
  }

  /**
   * Get a promise that resolves when the next client connects
   * @param timeout Optional timeout in ms (default: 2000)
   * @returns A promise that resolves with the connected client
   */
  nextConnection(timeout: number = 2000): Promise<WebSocket> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('Connection timeout'));
      }, timeout);
      
      this.once('connection', (client) => {
        clearTimeout(timer);
        resolve(client);
      });
    });
  }

  /**
   * Get a promise that resolves when the server receives a message
   * @param timeout Optional timeout in ms (default: 2000)
   * @returns A promise that resolves with the received message
   */
  nextMessage(timeout: number = 2000): Promise<ReceivedMessage> {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject(new Error('Message timeout'));
      }, timeout);
      
      this.once('message', (message) => {
        clearTimeout(timer);
        resolve(message);
      });
    });
  }

  /**
   * Send a message to all connected clients
   * @param data Message to send
   */
  send(data: any): void {
    const payload = this.jsonProtocol && typeof data !== 'string'
      ? JSON.stringify(data)
      : data;
    
    this.clients.forEach((client) => {
      // Only send to clients that are open
      if (client.readyState === WebSocket.OPEN) {
        client.send(payload);
      }
    });
  }

  /**
   * Send a message to a specific client
   * @param client Target WebSocket client
   * @param data Message to send
   */
  sendTo(client: WebSocket, data: any): void {
    const payload = this.jsonProtocol && typeof data !== 'string'
      ? JSON.stringify(data)
      : data;
    
    // Only send if client is open
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  }

  /**
   * Close the server and all connections
   */
  async close(): Promise<void> {
    // Close all client connections
    const clientClosePromises = Array.from(this.clients).map((client) => {
      return new Promise<void>((resolve) => {
        client.on('close', () => resolve());
        client.close();
      });
    });
    
    // Wait for all clients to close (or timeout after 1 second)
    if (clientClosePromises.length > 0) {
      await Promise.race([
        Promise.all(clientClosePromises),
        new Promise((resolve) => setTimeout(resolve, 1000))
      ]);
    }
    
    // Close the server itself
    return new Promise<void>((resolve, reject) => {
      this.server.close((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  /**
   * Check if there are any connected clients
   */
  get hasClients(): boolean {
    return this.clients.size > 0;
  }

  /**
   * Get the number of connected clients
   */
  get clientCount(): number {
    return this.clients.size;
  }

  /**
   * Get all messages received by this server
   */
  get messages(): ReceivedMessage[] {
    return [...this.receivedMessages];
  }
}

/**
 * Create a TestWebSocketServer on a random port
 * @param options Server options
 * @returns A promise resolving to the created server
 */
export async function createTestServer(
  options: TestServerOptions = {}
): Promise<TestWebSocketServer> {
  const server = new TestWebSocketServer(options);
  return server;
}

/**
 * Generate a random WebSocket server URL
 * @returns A WebSocket URL with a random port
 */
export function getRandomServerUrl(): string {
  return `ws://localhost:${10000 + Math.floor(Math.random() * 50000)}`;
}

/**
 * Wait for a WebSocket to reach a specific ready state
 * @param socket The WebSocket to wait for
 * @param state The target ready state
 * @param timeout Maximum time to wait (ms)
 * @returns Promise that resolves when the state is reached
 */
export function waitForSocketState(
  socket: WebSocket,
  state: number,
  timeout: number = 2000
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (socket.readyState === state) {
      resolve();
      return;
    }
    
    const timer = setTimeout(() => {
      reject(new Error(`Socket state timeout: Expected ${state}, got ${socket.readyState}`));
    }, timeout);
    
    const checkState = () => {
      if (socket.readyState === state) {
        clearTimeout(timer);
        socket.removeEventListener('open', checkState);
        socket.removeEventListener('close', checkState);
        socket.removeEventListener('error', checkState);
        resolve();
      }
    };
    
    socket.addEventListener('open', checkState);
    socket.addEventListener('close', checkState);
    socket.addEventListener('error', checkState);
  });
}

/**
 * Create a unique test ID
 * @returns A unique identifier for test isolation
 */
export function createTestId(): string {
  return uuidv4().split('-')[0];
}
