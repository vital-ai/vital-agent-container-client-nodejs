#!/usr/bin/env ts-node
/**
 * Script to decode the serialized container from the chat log
 * This will show us what objects should be included in the payload
 */

// The base64 encoded string from the chat log
const serializedContainer = "WwogIHsKICAgICJVUkkiOiAiaHR0cDovL3ZpdGFsLmFpL3ZpdGFsLmFpL3ZpdGFsc2lnbnMvNTE1NDRkMGEtYTJjYy00MTYyLWFkN2EtNzczZWExZWI4Mzg1IiwKICAgICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNoYXNIYWxleUNoYXRJbnRlcmFjdGlvbk1vZGVsVHlwZVVSSSI6ICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNIYWxleUNoYXRJbnRlcmFjdGlvbk1vZGVsVHlwZV9PcGVuQUlfQ2hhdEdQVF80byIsCiAgICAiaHR0cDovL3ZpdGFsLmFpL29udG9sb2d5L2NoYXQtYWkjaGFzSGFsZXlDaGF0SW50ZXJhY3Rpb25UeXBlVVJJIjogImh0dHA6Ly92aXRhbC5haS9vbnRvbG9neS9jaGF0LWFpI0hhbGV5Q2hhdEludGVyYWN0aW9uX0NIQVRfS0ciLAogICAgInR5cGUiOiAiaHR0cDovL3ZpdGFsLmFpL29udG9sb2d5L2NoYXQtYWkjSGFsZXlDaGF0SW50ZXJhY3Rpb24iLAogICAgImh0dHA6Ly92aXRhbC5haS9vbnRvbG9neS92aXRhbC1jb3JlI3ZpdGFsdHlwZSI6ICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNIYWxleUNoYXRJbnRlcmFjdGlvbiIsCiAgICAidHlwZXMiOiBbCiAgICAgICJodHRwOi8vdml0YWwuYWkvb250b2xvZ3kvY2hhdC1haSNIYWxleUNoYXRJbnRlcmFjdGlvbiIKICAgIF0KICB9Cl0=";

console.log('🔍 Decoding serialized container...\n');

try {
  // Decode base64 to string
  const decodedString = Buffer.from(serializedContainer, 'base64').toString('utf8');
  
  console.log('📝 Raw decoded string:');
  console.log(decodedString);
  console.log('\n' + '='.repeat(80) + '\n');
  
  // Parse as JSON
  const parsedJson = JSON.parse(decodedString);
  
  console.log('📋 Parsed JSON structure:');
  console.log(JSON.stringify(parsedJson, null, 2));
  console.log('\n' + '='.repeat(80) + '\n');
  
  // Analyze the structure
  console.log('🔎 Analysis:');
  
  if (Array.isArray(parsedJson)) {
    console.log(`📦 Container holds an array with ${parsedJson.length} object(s):`);
    
    parsedJson.forEach((obj, index) => {
      console.log(`\n  Object ${index + 1}:`);
      console.log(`    URI: ${obj.URI || 'N/A'}`);
      console.log(`    Type: ${obj.type || 'N/A'}`);
      console.log(`    VitalType: ${obj['http://vital.ai/ontology/vital-core#vitaltype'] || 'N/A'}`);
      
      // Show key properties
      const properties = Object.keys(obj).filter(key => 
        key.startsWith('http://vital.ai/ontology/') && 
        !key.includes('#vitaltype') && 
        key !== 'type'
      );
      
      if (properties.length > 0) {
        console.log('    Properties:');
        properties.forEach(prop => {
          console.log(`      ${prop}: ${obj[prop]}`);
        });
      }
    });
  } else {
    console.log('📦 Container holds a single object:');
    console.log(`  URI: ${parsedJson.URI || 'N/A'}`);
    console.log(`  Type: ${parsedJson.type || 'N/A'}`);
    console.log(`  VitalType: ${parsedJson['http://vital.ai/ontology/vital-core#vitaltype'] || 'N/A'}`);
  }
  
  console.log('\n' + '='.repeat(80) + '\n');
  console.log('💡 Summary: This serialized container contains the chat interaction object');
  console.log('   that should be included in the message payload to specify the chat');
  console.log('   interaction model and type for the conversation.');
  
} catch (error) {
  console.error('❌ Error decoding serialized container:', error);
}
