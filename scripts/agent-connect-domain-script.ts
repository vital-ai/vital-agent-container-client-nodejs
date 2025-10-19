#!/usr/bin/env ts-node
/**
 * Domain script demonstrating usage of the VitalAgentClient WebSocket client with local schema objects.
 * 
 * This script:
 * 1. Connects to a WebSocket server
 * 2. Creates VitalSigns graph objects using local schema classes
 * 3. Converts graph objects to JSON using toJSON() method
 * 4. Sends the JSON message once connected
 * 5. Listens for responses and converts them back to graph objects using fromJSON()
 * 6. Handles reconnection if the connection is lost
 * 7. Gracefully disconnects on SIGINT (Ctrl+C)
 * 
 * Usage:
 * ts-node agent-connect-domain-script.ts [host] [port]
 * 
 * Defaults are host=localhost and port=8000 if not specified
 */

import { VitalAgentClient, ConnectionStatus } from '../src/client';
import { generateUri } from '../src/vital-utils';

// Import domain graph objects from chat-ai schema
import { VITAL_Node } from '../src/chat-ai-0.1.0-schema/vital-core/vitalNode';
import { VitalSession } from '../src/chat-ai-0.1.0-schema/vital-core/vitalSession';
import { AIMPMessage } from '../src/chat-ai-0.1.0-schema/vital-aimp/aimpmessage';
import { AIMPMessageContainer } from '../src/chat-ai-0.1.0-schema/vital-aimp/aimpmessageContainer';
import { HaleyChatIntent } from '../src/chat-ai-0.1.0-schema/chat-ai/haleyChatIntent';
import { HaleyChatUserMessage } from '../src/chat-ai-0.1.0-schema/chat-ai/haleyChatUserMessage';
import { HaleyChatInteraction } from '../src/chat-ai-0.1.0-schema/chat-ai/haleyChatInteraction';
import { HaleyContainer } from '../src/chat-ai-0.1.0-schema/haley-ai-question/haleyContainer';
// Import additional domain objects for server responses
import { HaleyChatBotMessage } from '../src/chat-ai-0.1.0-schema/chat-ai/haleyChatBotMessage';
import { HaleyChatAgentThought } from '../src/chat-ai-0.1.0-schema/chat-ai/haleyChatAgentThought';
import { HaleyRealtimeMessage } from '../src/chat-ai-0.1.0-schema/vital-aimp/haleyRealtimeMessage';
import { ThinkingMessage } from '../src/chat-ai-0.1.0-schema/vital-aimp/thinkingMessage';
import { AIMPTask } from '../src/chat-ai-0.1.0-schema/vital-aimp/aimptask';

// Configuration
const DEFAULT_HOST = 'localhost';
const DEFAULT_PORT = 8000;
const DEFAULT_PATH = '/haleyagent/ws';

// Parse command line arguments
const host = process.argv[2] || DEFAULT_HOST;
const port = parseInt(process.argv[3]) || DEFAULT_PORT;
const websocketUrl = `ws://${host}:${port}${DEFAULT_PATH}`;

/**
 * Create sample message using VitalSigns graph objects and their toJSON() methods
 */
function createSampleMessage(): any[] {
  console.log('📦 Creating VitalSigns graph objects using chat-ai domain classes...');
  
  // 1. Create a chat intent using proper HaleyChatIntent class
  const chatIntent = new HaleyChatIntent();
  chatIntent.URI = generateUri({ classUri: chatIntent.vitaltype });
  // Set properties that exist on HaleyChatIntent (extends HaleyIntentCommand)
  chatIntent.userID = "marc@example.com";
  chatIntent.username = "Marc Hadfield";
  chatIntent.sessionID = "4324195200";
  chatIntent.authSessionID = "4324195200";
  chatIntent.accountURI = "urn:account_1";
  
  console.log('✅ Created HaleyChatIntent:', {
    URI: chatIntent.URI,
    userID: chatIntent.userID,
    username: chatIntent.username,
    vitaltype: chatIntent.vitaltype
  });

  // 2. Create a user message using proper HaleyChatUserMessage class
  const userMessage = new HaleyChatUserMessage();
  userMessage.URI = generateUri({ classUri: userMessage.vitaltype });
  userMessage.chatTextMessage = "whats your name?";
  
  console.log('✅ Created HaleyChatUserMessage:', {
    uri: userMessage.URI,
    chatTextMessage: userMessage.chatTextMessage,
    vitaltype: userMessage.vitaltype
  });

  // 3. Create a chat interaction using proper HaleyChatInteraction class
  const interaction = new HaleyChatInteraction();
  interaction.URI = generateUri({ classUri: interaction.vitaltype });
  interaction.haleyChatInteractionModelTypeURI = "http://vital.ai/ontology/chat-ai#HaleyChatInteractionModelType_OpenAI_ChatGPT_4o";
  interaction.haleyChatInteractionTypeURI = "http://vital.ai/ontology/chat-ai#HaleyChatInteraction_CHAT_KG";
  
  console.log('✅ Created HaleyChatInteraction:', {
    uri: interaction.URI,
    haleyChatInteractionModelTypeURI: interaction.haleyChatInteractionModelTypeURI,
    haleyChatInteractionTypeURI: interaction.haleyChatInteractionTypeURI,
    vitaltype: interaction.vitaltype
  });

  // 4. Create a haley container (simplified, no double encoding)
  const container = new HaleyContainer();
  container.URI = generateUri({ classUri: container.vitaltype });
  
  
  const jsonString = JSON.stringify([interaction.toJSON()])

  const base64Encoded = Buffer.from(jsonString, 'utf8').toString('base64');

  container.serializedContainer = base64Encoded
  
  
  
  console.log('✅ Created HaleyContainer:', {
    uri: container.URI,
    vitaltype: container.vitaltype
  });

  // Convert to JSON using toJSON() method for proper serialization format
  // Make sure URIs are included in the JSON output
  const chatIntentJson = chatIntent.toJSON();
  
  const userMessageJson = userMessage.toJSON();
  
  const interactionJson = interaction.toJSON();
  
  const containerJson = container.toJSON();
  
  const messageArray = [
    chatIntentJson,
    userMessageJson,
    interactionJson,
    containerJson
  ];
  
  console.log('🔄 Converted graph objects to JSON with URIs included');
  return messageArray;
}

/**
 * Parse received JSON messages back into graph objects using fromJSON()
 */
function parseResponseMessage(jsonArray: any[]): void {
  console.log('🔍 Parsing response back into graph objects using fromJSON()...');
  
  for (let i = 0; i < jsonArray.length; i++) {
    const jsonObj = jsonArray[i];
    const vitaltype = jsonObj['http://vital.ai/ontology/vital-core#vitaltype'] || jsonObj.vitaltype;
    const uri = jsonObj['URI'] || jsonObj.uri;
    
    if (!vitaltype) {
      console.log(`⚠️  Object ${i}: No vitaltype found, skipping`);
      continue;
    }
    
    console.log(`📋 Object ${i}: ${vitaltype}`);
    
    try {
      // Create appropriate graph object based on vitaltype
      let graphObject: any = null;
      
      if (vitaltype.includes('HaleyChatIntent')) {
        graphObject = new HaleyChatIntent();
      } else if (vitaltype.includes('HaleyChatUserMessage')) {
        graphObject = new HaleyChatUserMessage();
      } else if (vitaltype.includes('HaleyChatBotMessage')) {
        graphObject = new HaleyChatBotMessage();
      } else if (vitaltype.includes('HaleyChatAgentThought')) {
        graphObject = new HaleyChatAgentThought();
      } else if (vitaltype.includes('HaleyChatInteraction')) {
        graphObject = new HaleyChatInteraction();
      } else if (vitaltype.includes('HaleyRealtimeMessage')) {
        graphObject = new HaleyRealtimeMessage();
      } else if (vitaltype.includes('HaleyContainer')) {
        graphObject = new HaleyContainer();
      } else if (vitaltype.includes('ThinkingMessage')) {
        graphObject = new ThinkingMessage();
      } else if (vitaltype.includes('AIMPTask')) {
        graphObject = new AIMPTask();
      } else if (vitaltype.includes('VitalSession')) {
        graphObject = new VitalSession();
      } else if (vitaltype.includes('AIMPMessage') && !vitaltype.includes('Container')) {
        graphObject = new AIMPMessage();
      } else if (vitaltype.includes('AIMPMessageContainer')) {
        graphObject = new AIMPMessageContainer();
      } else if (vitaltype.includes('VITAL_Node')) {
        graphObject = new VITAL_Node();
      } else {
        // Fallback to base VITAL_Node for unknown types
        graphObject = new VITAL_Node();
        console.log(`⚠️  Unknown type '${vitaltype}', creating VITAL_Node fallback`);
      }
      
      // Use fromJSON() to populate the object with the received data
      if (graphObject && typeof graphObject.fromJSON === 'function') {
        graphObject.fromJSON(jsonObj);
        console.log(`✅ Parsed using fromJSON():`, {
          type: graphObject.constructor.name,
          uri: graphObject.URI || graphObject.uri,
          vitaltype: graphObject.vitaltype,
          // Show key properties based on type
          ...(graphObject.chatTextMessage && { chatTextMessage: graphObject.chatTextMessage }),
          ...(graphObject.hasChatGeneratedMessage && { hasChatGeneratedMessage: graphObject.hasChatGeneratedMessage }),
          ...(graphObject.hasHaleyChatThoughtText && { hasHaleyChatThoughtText: graphObject.hasHaleyChatThoughtText }),
          ...(graphObject.hasServerSentEventJSON && { hasServerSentEventJSON: 'SSE data present' }),
          ...(graphObject.hasAIMPTaskStatusURI && { hasAIMPTaskStatusURI: graphObject.hasAIMPTaskStatusURI }),
          ...(graphObject.hasChatTaskStagesJSON && { hasChatTaskStagesJSON: 'Task stages present' }),
          ...(graphObject.userID && { userID: graphObject.userID }),
          ...(graphObject.username && { username: graphObject.username }),
          ...(graphObject.sessionID && { sessionID: graphObject.sessionID })
        });
      } else {
        console.log(`⚠️  Object does not have fromJSON() method, showing raw properties:`, {
          uri: uri,
          vitaltype: vitaltype,
          properties: Object.keys(jsonObj).filter(k => !k.startsWith('http://') && k !== 'URI' && k !== 'type' && k !== 'types')
        });
      }
      
    } catch (error) {
      console.error(`❌ Error parsing object ${i}:`, error);
      console.log('Raw object:', JSON.stringify(jsonObj, null, 2));
    }
  }
}

// Create sample message using graph objects
const sampleMessage = createSampleMessage();

// Create a client with no reconnection (single message mode)
const client = new VitalAgentClient({
  connectionTimeout: 5000, // 5 seconds timeout for connection attempts
  // Disable reconnection - server closes connection after processing
  reconnect: {
    enabled: false
  }
});

// Track responses for summary
let responseMessages: any[] = [];
let botResponse: string = '';

// Event handlers
client.on('connected', () => {
  console.log('✅ Connected to server');
  console.log('📤 Sending test message: "whats your name?"');
  console.log('🔍 Domain message being sent:');
  console.log(JSON.stringify(sampleMessage, null, 2));
  
  // Send the message created from graph objects
  client.send(sampleMessage);
});

client.on('message', (data: any) => {
  console.log('\n📥 Received message from server:');
  console.log('--- RAW JSON ---');
  console.log(JSON.stringify(data, null, 2));
  console.log('--- END OF RAW JSON ---\n');
  
  // Store response for summary
  responseMessages.push(...data);
  
  // Extract bot response if present
  if (Array.isArray(data)) {
    for (const item of data) {
      if (item['http://vital.ai/ontology/chat-ai#hasChatGeneratedMessage']) {
        botResponse = item['http://vital.ai/ontology/chat-ai#hasChatGeneratedMessage'];
      }
    }
  }
  
  // Parse the response back into graph objects
  if (Array.isArray(data)) {
    parseResponseMessage(data);
  } else {
    console.log('⚠️  Response is not an array, cannot parse into graph objects');
  }
  
  console.log('--- END OF MESSAGE ---\n');
});

client.on('disconnected', () => {
  console.log('✅ Server closed connection (message processed)');
  
  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 CONVERSATION SUMMARY');
  console.log('='.repeat(60));
  console.log(`👤 User asked: "whats your name?"`);
  console.log(`🤖 Bot responded: "${botResponse || 'No response captured'}"`);
  console.log(`📈 Total messages received: ${responseMessages.length}`);
  
  // Count message types
  const messageTypes = responseMessages.reduce((acc: any, msg: any) => {
    const type = msg['http://vital.ai/ontology/vital-core#vitaltype'] || 'Unknown';
    const shortType = type.split('#')[1] || type;
    acc[shortType] = (acc[shortType] || 0) + 1;
    return acc;
  }, {});
  
  console.log('\n📋 Message types received:');
  Object.entries(messageTypes).forEach(([type, count]) => {
    console.log(`   • ${type}: ${count}`);
  });
  
  console.log('\n🏁 Script completed successfully');
  console.log('='.repeat(60));
  process.exit(0);
});

client.on('error', (error: Error) => {
  console.error('💥 Connection error:', error.message);
  process.exit(1);
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, closing connection...');
  client.disconnect();
  process.exit(0);
});

// Connect to the server
console.log(`🚀 Connecting to ${websocketUrl}...`);
client.connect(websocketUrl);
