import { VitalAgentClient } from '../src';

// Create a client with reconnection enabled
const client = new VitalAgentClient({
  reconnect: {
    enabled: true,
    maxAttempts: 5,
    delay: 2000
  },
  connectionTimeout: 5000
});

// Event handlers
client.on('connected', () => {
  console.log('Connected to server!');
  
  // Send a message after connection is established
  client.send({
    type: 'greeting',
    content: 'Hello from VITAL Agent client!'
  }).then(() => {
    console.log('Message sent successfully');
  }).catch(error => {
    console.error('Failed to send message:', error.message);
  });
});

client.on('message', (message) => {
  console.log('Received message:', message);
  
  // Example of handling specific message types
  if (message.type === 'response') {
    console.log('Got response:', message.content);
  }
});

client.on('error', (error) => {
  console.error('WebSocket error:', error.message);
});

client.on('disconnected', ({ code, reason }) => {
  console.log(`Disconnected: Code ${code}, Reason: ${reason}`);
});

client.on('reconnecting', ({ attempt, maxAttempts }) => {
  console.log(`Reconnection attempt ${attempt}/${maxAttempts}`);
});

// Connect to a WebSocket server
const serverUrl = 'ws://localhost:8080';
console.log(`Connecting to ${serverUrl}...`);

client.connect(serverUrl).then(() => {
  console.log('Connection promise resolved');
}).catch(error => {
  console.error('Connection failed:', error.message);
});

// Example of how to close the connection after some time
setTimeout(async () => {
  console.log('Disconnecting...');
  try {
    await client.disconnect(1000, 'Client closing connection normally');
    console.log('Disconnected successfully');
  } catch (error) {
    console.error('Error during disconnection:', error);
  }
}, 20000); // Disconnect after 20 seconds
