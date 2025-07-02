/**
 * Example demonstrating usage of the VitalSchemaManager
 */

import path from 'path';
import { vitalSchema } from './vital-schema-manager';

// Example function to initialize the schema system
async function initializeSchemas() {
  try {
    // Load schemas from vital_schema and domain_schema directories
    const schemaDirectories = [
      path.resolve(__dirname, '../vital_schema'),
      path.resolve(__dirname, '../domain_schema')
    ];
    
    await vitalSchema.loadSchemas(schemaDirectories);
    console.log('Schemas loaded successfully');

    // Example: Create a chat user message
    // Debug class hierarchy and property inheritance
    console.log('\nDEBUG - Checking inheritance for HaleyChatUserMessage:');
    const userMessageURI = 'http://vital.ai/ontology/chat-ai#HaleyChatUserMessage';
    const userMsgClass = vitalSchema.getClassSchema(userMessageURI);
    console.log('Class schema:', userMsgClass?.id, '- Parent:', userMsgClass?.parent);
    
    // List all parent classes
    const superclasses = vitalSchema.listSuperclasses(userMessageURI);
    console.log('All parent classes:', superclasses);
    
    // Check if the parent class exists
    if (userMsgClass?.parent) {
      const parentClassURI = userMsgClass.parent;
      const parentClass = vitalSchema.getClassSchema(parentClassURI);
      console.log(`Parent class ${parentClassURI} exists:`, !!parentClass);
      console.log('Parent class properties count:', parentClass?.properties ? Object.keys(parentClass.properties).length : 0);
      
      // Check for chatMessageActorSequence in parent class properties
      if (parentClass?.properties) {
        console.log('\nSearching for chatMessageActorSequence in parent class properties:');
        for (const [key, prop] of Object.entries(parentClass.properties)) {
          const shortName = vitalSchema.createShortName(key);
          console.log(`Property ${key} -> shortName: ${shortName}`);
          if (shortName === 'chatMessageActorSequence' || key.includes('chatMessageActorSequence')) {
            console.log('FOUND property in parent class:', key);
            console.log('Property definition:', prop);
          }
        }
      }
      
      // Let's check all properties of the HaleyChatUserMessage through getAllPropertiesForClass
      console.log('\nChecking all properties for HaleyChatUserMessage through getAllPropertiesForClass:');
      // We need to access this via a non-public method, so we'll use a workaround
      // The getAllPropertiesForClass method is actually used internally by the graphObject method
      // Let's create a debug helper that can show us all available properties
      
      // First, get all parent classes of our class
      const parentHierarchy = vitalSchema.listSuperclasses(userMessageURI);
      console.log('Class hierarchy:', [userMessageURI, ...parentHierarchy]);
      
      // Directly check if the parent is a superclass
      console.log('Is parent in superclasses list?', parentHierarchy.includes(parentClassURI));
      
      // Check if any class in the hierarchy has the chatMessageActorSequence property
      const allClasses = [userMessageURI, ...parentHierarchy];
      console.log('\nChecking each class in the hierarchy for the property:');
      
      for (const classURI of allClasses) {
        const classSchema = vitalSchema.getClassSchema(classURI);
        if (classSchema?.properties) {
          const props = Object.keys(classSchema.properties);
          console.log(`Class ${classURI} has ${props.length} properties`);
          
          // Look for our target property
          const hasTargetProp = props.some(p => 
            p.includes('chatMessageActorSequence') || 
            vitalSchema.createShortName(p) === 'chatMessageActorSequence');
          
          if (hasTargetProp) {
            console.log(`FOUND chatMessageActorSequence in class ${classURI}`);
          }
        } else {
          console.log(`Class ${classURI} has no properties defined`);  
        }
      }
    }
    
    // Try to create and set property on a graph object
    console.log('\nAttempting to create and set property:');
    const chatMsg = vitalSchema.graphObject('HaleyChatUserMessage');
    try {
      chatMsg.set('chatMessageActorSequence', 'test');
    } catch (error) {
      console.error(error);
    }

    const userMsg = vitalSchema.graphObject('HaleyChatUserMessage');
    
    console.log(JSON.stringify(userMsg, null, 2));


    // Generate a unique URI
    userMsg.URI = `http://vital.ai/message/HaleyChatUserMessage/msg-${Date.now()}-${Math.round(10000 * Math.random())}`;
    
    // Set properties using the shorthand method
    userMsg.set('chatTextMessage', 'Hello from TypeScript schema manager');
    userMsg.set('chatMessageActorSequence', 'chat-langchain');
    userMsg.set('chatTimestamp', Date.now());
    userMsg.set('timestamp', Date.now());
    
    console.log('Created user message:');
    console.log(JSON.stringify(userMsg, null, 2));
    
    // Validate the message
    const isValid = vitalSchema.validateMessage(userMsg);
    console.log(`Message validation: ${isValid ? 'VALID' : 'INVALID'}`);
    
    // Example of validating a received WebSocket message
    console.log('\nValidating a sample WebSocket message:');
    const receivedMessage = [
      {
        "URI": "http://vital.ai/vital.ai/vitalsigns/34d7f102-de51-41c7-a2fd-7710bbbe6416",
        "http://vital.ai/ontology/vital-aimp#hasServerSentEventJSON": "{\"choices\":[{\"index\":0,\"delta\":{\"content\":\"<span>&#8203;</span>\"}}]}\n\n",
        "type": "http://vital.ai/ontology/vital-aimp#HaleyRealtimeMessage",
        "http://vital.ai/ontology/vital-core#vitaltype": "http://vital.ai/ontology/vital-aimp#HaleyRealtimeMessage",
        "types": [
          "http://vital.ai/ontology/vital-aimp#HaleyRealtimeMessage"
        ]
      }
    ];
    
    const wsMessageValid = vitalSchema.validateMessage(receivedMessage);
    console.log(`WebSocket message validation: ${wsMessageValid ? 'VALID' : 'INVALID'}`);
    
    // Example: Domain Navigation and Exploration
    console.log('\nDomain Navigation Examples:');
    
    // Get all loaded domains
    const loadedDomains = vitalSchema.getLoadedDomains();
    console.log(`Loaded domains (${loadedDomains.length}): ${loadedDomains.map(d => d.name).join(', ')}`);
    
    // Example with a domain that has parents
    // Using vital-nlp as an example (adjust if not available)
    const domainToExplore = 'http://vital.ai/ontology/vital-nlp';
    console.log(`\nExploring domain: ${domainToExplore}`);
    
    // Get imported domains (parents)
    const importedDomains = vitalSchema.getImportedDomains(domainToExplore);
    console.log(`Imported domains: ${importedDomains.join(', ')}`);
    
    // Get dependent domains
    const dependentDomains = vitalSchema.getDependentDomains(domainToExplore);
    console.log(`Domains that depend on ${domainToExplore}: ${dependentDomains.join(', ')}`);
    
    // Example: Class Hierarchy Navigation
    console.log('\nClass Hierarchy Navigation Examples:');
    
    // Use a common class from vital-core as example
    const nodeClass = 'http://vital.ai/ontology/vital-core#VITAL_Node';
    console.log(`Exploring class: ${nodeClass}`);
    
    // Get direct parent class
    const directParent = vitalSchema.listSuperclasses(nodeClass, true);
    console.log(`Direct parent: ${directParent.join(', ')}`);
    
    // Get all parent classes
    const allParents = vitalSchema.listSuperclasses(nodeClass);
    console.log(`All parents: ${allParents.join(', ')}`);
    
    // Get direct subclasses
    const directChildren = vitalSchema.listSubclasses(nodeClass, true);
    console.log(`Direct subclasses (${directChildren.length}): ${directChildren.slice(0, 5).join(', ')}${directChildren.length > 5 ? '...' : ''}`);
    
    // Get all subclasses
    const allChildren = vitalSchema.listSubclasses(nodeClass);
    console.log(`All subclasses: ${allChildren.length} classes`);
    
    // Example: Property Hierarchy Navigation
    console.log('\nProperty Hierarchy Navigation Examples:');
    
    // Use a common property as example
    const nameProperty = 'http://vital.ai/ontology/vital-core#hasName';
    console.log(`Exploring property: ${nameProperty}`);
    
    // Get direct parent property
    const directParentProp = vitalSchema.listSuperproperties(nameProperty, true);
    console.log(`Direct parent property: ${directParentProp.join(', ') || 'None'}`);
    
    // Get all parent properties
    const allParentProps = vitalSchema.listSuperproperties(nameProperty);
    console.log(`All parent properties: ${allParentProps.join(', ') || 'None'}`);
    
    // Get direct child properties
    const directChildProps = vitalSchema.listSubproperties(nameProperty, true);
    console.log(`Direct child properties: ${directChildProps.join(', ') || 'None'}`);
    
    // Get all child properties
    const allChildProps = vitalSchema.listSubproperties(nameProperty);
    console.log(`All child properties: ${allChildProps.length} properties`);
    
  } catch (error) {
    console.error('Error:', error);
  }
}



// Guarantee the script exits after a specific time limit, no matter what
const exitTimeout = setTimeout(() => {
  console.log('\nForced exit due to timeout');
  process.exit(0);
}, 10000); // 10 seconds max runtime

// Make sure the timeout itself doesn't keep the process alive
exitTimeout.unref();

// Run the example
initializeSchemas()
  .then(() => {
    console.log('\nExample completed successfully.');
    
    // process.exit(0);

    // Properly cleanup the schema manager to release resources and event listeners
    vitalSchema.cleanup();
    
    // Cleanup and exit immediately
    clearTimeout(exitTimeout);
    // process.exit(0);
  })
  .catch(error => {
    console.error('Error in example:', error);
    // Still cleanup even on error
    try {
      vitalSchema.cleanup();
    } catch (cleanupError) {
      console.error('Error during cleanup:', cleanupError);
    }
    
    // Cleanup and exit immediately
    clearTimeout(exitTimeout);
    process.exit(1);
  });
