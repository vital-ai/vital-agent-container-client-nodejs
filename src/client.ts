import WebSocket from 'ws';
import { EventEmitter } from 'events';

/**
 * Options for configuring the WebSocket client
 */
export interface ClientOptions {
  /** Optional reconnection settings */
  reconnect?: {
    /** Whether to automatically reconnect on disconnection */
    enabled: boolean;
    /** Maximum number of reconnection attempts */
    maxAttempts?: number;
    /** Delay between reconnection attempts in milliseconds */
    delay?: number;
  };
  /** Optional headers to include in the WebSocket connection */
  headers?: Record<string, string>;
  /** Optional timeout in milliseconds for connection attempts */
  connectionTimeout?: number;
}

/**
 * Connection status for the WebSocket client
 */
export enum ConnectionStatus {
  DISCONNECTED = 'DISCONNECTED',
  CONNECTING = 'CONNECTING',
  CONNECTED = 'CONNECTED',
  RECONNECTING = 'RECONNECTING',
  CLOSING = 'CLOSING'
}

/**
 * Client for handling WebSocket connections with JSON message support
 */
export class VitalAgentClient extends EventEmitter {
  private ws: WebSocket | null = null;
  private url: string | null = null;
  private options: ClientOptions;
  private status: ConnectionStatus = ConnectionStatus.DISCONNECTED;
  private reconnectAttempts: number = 0;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private readyStateTimer: NodeJS.Timeout | null = null;

  /**
   * Creates a new VitalAgentClient instance
   * @param options Configuration options for the client
   */
  constructor(options: ClientOptions = {}) {
    super();
    this.options = {
      reconnect: {
        enabled: false,
        maxAttempts: 10,
        delay: 3000,
        ...options.reconnect
      },
      connectionTimeout: 30000,
      ...options
    };
  }

  /**
   * Opens a WebSocket connection to the specified URL
   * @param url The WebSocket server URL to connect to
   * @returns A promise that resolves when the connection is established
   */
  public async connect(url: string): Promise<void> {
    console.log(`[VitalAgentClient] Connecting to ${url}`);
    console.log(`[VitalAgentClient] Current status: ${this.status}`);
    console.log(`[VitalAgentClient] Timeout set to: ${this.options.connectionTimeout}ms`);
    
    if (this.status === ConnectionStatus.CONNECTED) {
      console.log(`[VitalAgentClient] Already connected, throwing error`);
      throw new Error('Client is already connected');
    }

    this.url = url;
    this.status = ConnectionStatus.CONNECTING;
    console.log(`[VitalAgentClient] Status changed to: ${this.status}`);

    return new Promise<void>((resolve, reject) => {
      try {
        // Create WebSocket options with our custom headers
        const wsOptions: WebSocket.ClientOptions = {
          headers: this.options.headers
        };
        console.log(`[VitalAgentClient] Creating WebSocket with options:`, wsOptions);

        this.ws = new WebSocket(url, wsOptions);
        console.log(`[VitalAgentClient] WebSocket instance created`);

        // Set up timeout for connection
        const connectionTimeout = setTimeout(() => {
          console.log(`[VitalAgentClient] CONNECTION TIMEOUT after ${this.options.connectionTimeout}ms`);
          console.log(`[VitalAgentClient] Current status at timeout: ${this.status}`);
          if (this.status === ConnectionStatus.CONNECTING) {
            console.log(`[VitalAgentClient] Terminating socket due to timeout`);
            this.ws?.terminate();
            reject(new Error('Connection timeout'));
          }
        }, this.options.connectionTimeout);
        console.log(`[VitalAgentClient] Connection timeout set: ${this.options.connectionTimeout}ms`);

        this.ws.on('open', () => {
          console.log(`[VitalAgentClient] WebSocket OPENED successfully`);
          clearTimeout(connectionTimeout);
          this.status = ConnectionStatus.CONNECTED;
          this.reconnectAttempts = 0;
          console.log(`[VitalAgentClient] Status changed to: ${this.status}`);
          console.log(`[VitalAgentClient] Emitting 'connected' event`);
          this.emit('connected');
          resolve();
        });

        this.ws.on('message', (data: WebSocket.Data) => {
          console.log(`[VitalAgentClient] Message received: ${data.toString().substring(0, 50)}...`);
          try {
            const message = JSON.parse(data.toString());
            console.log(`[VitalAgentClient] Emitting 'message' event with parsed data`);
            this.emit('message', message);
          } catch (err) {
            console.log(`[VitalAgentClient] Error parsing message: ${err}`);
            this.emit('error', new Error(`Failed to parse message: ${err}`));
          }
        });

        this.ws.on('error', (err) => {
          console.log(`[VitalAgentClient] WebSocket ERROR: ${err.message}`);
          this.emit('error', err);
          if (this.status === ConnectionStatus.CONNECTING) {
            console.log(`[VitalAgentClient] Error during connection, rejecting promise`);
            clearTimeout(connectionTimeout);
            reject(err);
          }
        });

        this.ws.on('close', (code, reason) => {
          console.log(`[VitalAgentClient] WebSocket CLOSED with code: ${code}, reason: ${reason.toString()}`);
          this.status = ConnectionStatus.DISCONNECTED;
          console.log(`[VitalAgentClient] Status changed to: ${this.status}`);
          console.log(`[VitalAgentClient] Emitting 'disconnected' event`);
          this.emit('disconnected', { code, reason: reason.toString() });
          
          if (this.options.reconnect?.enabled && this.url) {
            console.log(`[VitalAgentClient] Reconnect enabled, attempting to reconnect`);
            this._attemptReconnect();
          }
        });
        
        // Add debug for socket readyState
        console.log(`[VitalAgentClient] Initial WebSocket readyState: ${this.ws.readyState}`);
        
        // Check WebSocket readyState immediately instead of with setTimeout
        // This avoids Jest "Cannot log after tests are done" errors
        if (this.ws) {
          const readyState = this.ws.readyState;
          console.log(`[VitalAgentClient] Initial WebSocket readyState: ${readyState}`);
        }
        
      } catch (err) {
        console.log(`[VitalAgentClient] Error creating WebSocket: ${err}`);
        this.status = ConnectionStatus.DISCONNECTED;
        console.log(`[VitalAgentClient] Status changed to: ${this.status} due to error`);
        reject(err);
      }
    });
  }

  /**
   * Closes the WebSocket connection
   * @param code Optional close code
   * @param reason Optional close reason
   * @returns A promise that resolves when the connection is closed
   */
  public async disconnect(code?: number, reason?: string): Promise<void> {
    if (this.status === ConnectionStatus.DISCONNECTED) {
      return Promise.resolve();
    }

    // Cancel any pending reconnect or timers
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    
    // Clean up readyState timer if it exists
    if (this.readyStateTimer) {
      clearTimeout(this.readyStateTimer);
      this.readyStateTimer = null;
    }

    this.status = ConnectionStatus.CLOSING;

    return new Promise<void>((resolve) => {
      if (!this.ws) {
        this.status = ConnectionStatus.DISCONNECTED;
        resolve();
        return;
      }

      this.ws.once('close', () => {
        this.ws = null;
        this.status = ConnectionStatus.DISCONNECTED;
        resolve();
      });

      this.ws.close(code, reason);
    });
  }

  /**
   * Sends a JSON message through the WebSocket connection
   * @param message The message object to send
   * @returns A promise that resolves when the message has been sent
   */
  public async send(message: any): Promise<void> {
    if (this.status !== ConnectionStatus.CONNECTED || !this.ws) {
      throw new Error('Not connected to server');
    }

    return new Promise<void>((resolve, reject) => {
      try {
        const data = JSON.stringify(message);
        this.ws!.send(data, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      } catch (err) {
        reject(new Error(`Failed to serialize message: ${err}`));
      }
    });
  }

  /**
   * Gets the current connection status
   */
  public getStatus(): ConnectionStatus {
    return this.status;
  }

  /**
   * Checks if the client is currently connected
   */
  public isConnected(): boolean {
    return this.status === ConnectionStatus.CONNECTED;
  }

  /**
   * Attempt to reconnect to the server
   */
  private _attemptReconnect(): void {
    const { maxAttempts = 10, delay = 3000 } = this.options.reconnect || {};
    
    // Clear any existing reconnect timer first to prevent multiple timers
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    
    if (this.reconnectAttempts >= maxAttempts!) {
      // Emit the reconnect failed event and stop trying
      this.emit('reconnectFailed');
      return;
    }

    this.status = ConnectionStatus.RECONNECTING;
    this.reconnectAttempts++;
    
    // Emit the reconnecting event with attempt information
    this.emit('reconnecting', {
      attempt: this.reconnectAttempts,
      maxAttempts
    });
    
    // Set a new reconnect timer
    this.reconnectTimer = setTimeout(() => {
      // Don't use async/await here to avoid unhandled promise rejections
      if (this.url && this.status === ConnectionStatus.RECONNECTING) {
        this.connect(this.url).catch(() => {
          // Only attempt another reconnect if we're still in RECONNECTING state
          // This prevents extra reconnects after disconnect() is called
          if (this.status === ConnectionStatus.RECONNECTING) {
            this._attemptReconnect();
          }
        });
      }
    }, delay);
  }
}
