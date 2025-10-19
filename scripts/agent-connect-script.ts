#!/usr/bin/env ts-node
/**
 * Example script demonstrating usage of the VitalAgentClient WebSocket client.
 * 
 * This script:
 * 1. Connects to a WebSocket server
 * 2. Sends a specific message format from the log once connected
 * 3. Listens for responses and prints them in a readable format
 * 4. Handles reconnection if the connection is lost
 * 5. Gracefully disconnects on SIGINT (Ctrl+C)
 * 
 * Usage:
 * ts-node agent-connect-script.ts [host] [port]
 * 
 * Defaults are host=localhost and port=8000 if not specified
 */

import { VitalAgentClient, ConnectionStatus } from '../src/client';

// Configuration
const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 8000;
const DEFAULT_PATH = '/haleyagent/ws';

// Parse command line arguments
const host = process.argv[2] || DEFAULT_HOST;
const port = parseInt(process.argv[3]) || DEFAULT_PORT;
const websocketUrl = `ws://${host}:${port}${DEFAULT_PATH}`;

// Sample message from the log
const sampleMessage = [
  {
    "URI": "http://vital.ai/vital.ai/vitalsigns/44aa640c-9484-4e0c-a5d9-42e79cadf873",
    "http://vital.ai/ontology/vital#hasAccountURI": "urn:account_1",
    "http://vital.ai/ontology/vital-core#hasUsername": "Marc Hadfield",
    "http://vital.ai/ontology/vital-aimp#hasUserID": "marc@example.com",
    "http://vital.ai/ontology/vital-core#hasSessionID": "4756826688",
    "http://vital.ai/ontology/vital-aimp#hasAuthSessionID": "4756826688",
    "type": "http://vital.ai/ontology/chat-ai#HaleyChatIntent",
    "http://vital.ai/ontology/vital-core#vitaltype": "http://vital.ai/ontology/chat-ai#HaleyChatIntent",
    "types": [
      "http://vital.ai/ontology/chat-ai#HaleyChatIntent"
    ]
  },
  {
    "URI": "http://vital.ai/vital.ai/vitalsigns/e715f8f3-d09b-48f2-ae7a-2663c3b96971",
    "http://vital.ai/ontology/chat-ai#hasChatTextMessage": "whats your name?",
    "type": "http://vital.ai/ontology/chat-ai#HaleyChatUserMessage",
    "http://vital.ai/ontology/vital-core#vitaltype": "http://vital.ai/ontology/chat-ai#HaleyChatUserMessage",
    "types": [
      "http://vital.ai/ontology/chat-ai#HaleyChatUserMessage"
    ]
  },
  {
    "URI": "http://vital.ai/vital.ai/vitalsigns/58caf07d-d4ac-4675-9be0-d431be6dd367",
    "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI": "http://vital.ai/ontology/chat-ai#HaleyChatInteractionModelType_OpenAI_ChatGPT_4o",
    "http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionTypeURI": "http://vital.ai/ontology/chat-ai#HaleyChatInteraction_CHAT_KG",
    "type": "http://vital.ai/ontology/chat-ai#HaleyChatInteraction",
    "http://vital.ai/ontology/vital-core#vitaltype": "http://vital.ai/ontology/chat-ai#HaleyChatInteraction",
    "types": [
      "http://vital.ai/ontology/chat-ai#HaleyChatInteraction"
    ]
  },
  {
    "URI": "http://vital.ai/vital.ai/vitalsigns/bd3f1bbc-2e9e-401c-bb4b-f4725da59164",
    "http://vital.ai/ontology/haley-ai-question#hasSerializedContainer": "WwogIHsKICAgICJVUkkiOiAiaHR0cDovL3ZpdGFsLmFpL3ZpdGFsLmFpL3ZpdGFsc2lnbnMvNThjYWYwN2QtZDRhYy00Njc1LTliZTAtZDQzMWJlNmRkMzY3IiwKICAgICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNoYXNIYWxleUNoYXRJbnRlcmFjdGlvbk1vZGVsVHlwZVVSSSI6ICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNIYWxleUNoYXRJbnRlcmFjdGlvbk1vZGVsVHlwZV9PcGVuQUlfQ2hhdEdQVF80byIsCiAgICAiaHR0cDovL3ZpdGFsLmFpL29udG9sb2d5L2NoYXQtYWkjaGFzSGFsZXlDaGF0SW50ZXJhY3Rpb25UeXBlVVJJIjogImh0dHA6Ly92aXRhbC5haS9vbnRvbG9neS9jaGF0LWFpI0hhbGV5Q2hhdEludGVyYWN0aW9uX0NIQVRfS0ciLAogICAgInR5cGUiOiAiaHR0cDovL3ZpdGFsLmFpL29udG9sb2d5L2NoYXQtYWkjSGFsZXlDaGF0SW50ZXJhY3Rpb24iLAogICAgImh0dHA6Ly92aXRhbC5haS9vbnRvbG9neS92aXRhbC1jb3JlI3ZpdGFsdHlwZSI6ICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNIYWxleUNoYXRJbnRlcmFjdGlvbiIsCiAgICAidHlwZXMiOiBbCiAgICAgICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNIYWxleUNoYXRJbnRlcmFjdGlvbiIKICAgIF0KICB9Cl0=",
    "type": "http://vital.ai/ontology/haley-ai-question#HaleyContainer",
    "http://vital.ai/ontology/vital-core#vitaltype": "http://vital.ai/ontology/haley-ai-question#HaleyContainer",
    "types": [
      "http://vital.ai/ontology/haley-ai-question#HaleyContainer"
    ]
  }
];

// Create a client with custom reconnection options
const client = new VitalAgentClient({
  connectionTimeout: 5000, // 5 seconds timeout for connection attempts
  // Custom reconnection behavior
  reconnect: {
    enabled: false, // Disable automatic reconnection so we can control it manually
    maxAttempts: 3,
    delay: 2000 // 2 seconds between reconnection attempts
  },
  // Optional headers if needed
  headers: undefined
});

// Track connection state
let isConnected = false;

// Helper functions to format messages
function formatMessage(message: any): string {
  return JSON.stringify(message, null, 2);
}

function extractImportantInfo(message: any[]): any {
  // Try to extract meaningful information from different message types
  const result: any = {};
  
  message.forEach(item => {
    // Check for text messages
    if (item['http://vital.ai/ontology/chat-ai#hasChatTextMessage']) {
      result.textMessage = item['http://vital.ai/ontology/chat-ai#hasChatTextMessage'];
    }
    // Check for generated messages
    if (item['http://vital.ai/ontology/chat-ai#hasChatGeneratedMessage']) {
      result.generatedMessage = item['http://vital.ai/ontology/chat-ai#hasChatGeneratedMessage'];
    }
    // Check for thought messages
    if (item['http://vital.ai/ontology/chat-ai#hasHaleyChatThoughtText']) {
      result.thoughtText = item['http://vital.ai/ontology/chat-ai#hasHaleyChatThoughtText'];
    }
    // Check for server sent events (contains real-time content)
    if (item['http://vital.ai/ontology/vital-aimp#hasServerSentEventJSON']) {
      try {
        const sseJson = JSON.parse(item['http://vital.ai/ontology/vital-aimp#hasServerSentEventJSON']);
        if (sseJson.choices && sseJson.choices[0] && sseJson.choices[0].delta && sseJson.choices[0].delta.content) {
          result.content = sseJson.choices[0].delta.content;
        }
      } catch (e) {
        result.serverSentEventRaw = item['http://vital.ai/ontology/vital-aimp#hasServerSentEventJSON'];
      }
    }
  });
  
  return Object.keys(result).length > 0 ? result : null;
}

// Handle events
client.on('connected', async () => {
  console.log(`✅ Successfully connected to ${websocketUrl}`);
  isConnected = true;
  
  // Send the sample message from the log
  await sendSampleMessage();
});

client.on('disconnected', () => {
  console.log('❌ Disconnected from server');
  isConnected = false;
});

client.on('reconnecting', (data) => {
  console.log(`🔄 Attempting to reconnect... (Attempt ${data.attempt}/${data.maxAttempts})`);
});

client.on('message', (message) => {
  console.log('\n📩 --- RECEIVED MESSAGE ---');
  
  // Try to extract important content
  const extractedInfo = extractImportantInfo(message);
  if (extractedInfo) {
    console.log('📑 EXTRACTED CONTENT:');
    console.log(formatMessage(extractedInfo));
  }
  
  // Log the full message for debugging
  console.log('📊 FULL MESSAGE:');
  console.log(formatMessage(message));
  console.log('--- END OF MESSAGE ---\n');
});

// Helper functions
async function sendSampleMessage() {
  if (!isConnected) {
    console.log('Cannot send message: Not connected');
    return;
  }
  
  try {
    console.log('📤 Sending sample message from log...');
    await client.send(sampleMessage);
    console.log('✅ Sample message sent successfully');
  } catch (error) {
    console.error('❌ Failed to send sample message:', error);
  }
}

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n🛑 Shutting down...');
  
  try {
    if (client.getStatus() !== ConnectionStatus.DISCONNECTED) {
      console.log('Closing WebSocket connection...');
      await client.disconnect();
      console.log('WebSocket connection closed');
    }
  } catch (error) {
    console.error('Error during shutdown:', error);
  }
  
  process.exit(0);
});

// Main execution
async function main() {
  console.log('📡 WebSocket client initialized. Press Ctrl+C to exit.');
  console.log(`🚀 Connecting to ${websocketUrl}...`);
  
  try {
    await client.connect(websocketUrl);
    
    // Log the message format that will be sent
    console.log('\n📋 Sample message format that will be sent on connection:');
    console.log(formatMessage(sampleMessage));
    console.log('\nWaiting for server responses...');
    
    // Keep the process running to receive messages
    // The connection and message handling is done through event listeners
  } catch (error) {
    console.error('❌ Failed to connect:', error);
    process.exit(1);
  }
}

// Start the script
main().catch(error => {
  console.error('Unhandled error:', error);
  process.exit(1);
});
