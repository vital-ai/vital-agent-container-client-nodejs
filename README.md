# vital-agent-container-client-nodejs

A TypeScript WebSocket client for communicating with WebSocket services that exchange JSON messages.

## Features

- WebSocket connection management (connect/disconnect)
- JSON message serialization and deserialization
- Automatic reconnection with configurable retries
- Connection status monitoring and events
- Typed event-based message handling
- Promise-based async/await API

## Installation

```bash
npm install vital-agent-container-client-nodejs
```

## Usage

### Basic Connection

```typescript
import { VitalAgentClient } from 'vital-agent-container-client-nodejs';

// Create a client instance
const client = new VitalAgentClient();

// Connect to a WebSocket server
client.connect('ws://your-server:8080')
  .then(() => {
    console.log('Connected to server');
  })
  .catch(err => {
    console.error('Connection failed:', err.message);
  });

// Handle incoming messages
client.on('message', (message) => {
  console.log('Received message:', message);
});

// Close the connection when done
client.disconnect();
```

### Advanced Configuration

```typescript
import { VitalAgentClient } from 'vital-agent-container-client-nodejs';

// Create a client with custom options
const client = new VitalAgentClient({
  reconnect: {
    enabled: true,     // Enable automatic reconnection
    maxAttempts: 5,    // Maximum number of reconnection attempts
    delay: 2000        // Delay between attempts (milliseconds)
  },
  headers: {           // Custom headers
    'Authorization': 'Bearer your-token'
  },
  connectionTimeout: 5000  // Connection timeout (milliseconds)
});

// Connect with handlers
async function connectToServer() {
  try {
    await client.connect('ws://your-server:8080');
    console.log('Connected successfully');
  } catch (error) {
    console.error('Connection failed:', error);
  }
}

// Send a message
async function sendMessage() {
  if (client.isConnected()) {
    try {
      await client.send({
        type: 'request',
        action: 'getData',
        parameters: { id: 123 }
      });
      console.log('Message sent');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  }
}

// Register event handlers
client.on('connected', () => {
  console.log('Connection established');
});

client.on('disconnected', ({ code, reason }) => {
  console.log(`Disconnected: Code ${code}, Reason: ${reason}`);
});

client.on('reconnecting', ({ attempt, maxAttempts }) => {
  console.log(`Reconnecting: Attempt ${attempt}/${maxAttempts}`);
});

client.on('error', (error) => {
  console.error('WebSocket error:', error);
});
```

## API Reference

### `VitalAgentClient`

The main client class for WebSocket communication.

#### Constructor

```typescript
constructor(options?: ClientOptions)
```

- `options` - Optional configuration options for the client.

#### Methods

- `connect(url: string): Promise<void>` - Opens a WebSocket connection to the specified URL.
- `disconnect(code?: number, reason?: string): Promise<void>` - Closes the WebSocket connection.
- `send(message: any): Promise<void>` - Sends a JSON message through the WebSocket connection.
- `getStatus(): ConnectionStatus` - Gets the current connection status.
- `isConnected(): boolean` - Checks if the client is currently connected.

#### Events

- `'connected'` - Emitted when a connection is established.
- `'disconnected'` - Emitted when the connection is closed, with `{ code, reason }`.
- `'message'` - Emitted when a message is received, with the parsed JSON message.
- `'error'` - Emitted when an error occurs.
- `'reconnecting'` - Emitted when attempting to reconnect, with `{ attempt, maxAttempts }`.
- `'reconnectFailed'` - Emitted when all reconnection attempts have failed.

### `ConnectionStatus`

Enum for connection status:
- `DISCONNECTED`
- `CONNECTING`
- `CONNECTED`
- `RECONNECTING`
- `CLOSING`

## License

ISC