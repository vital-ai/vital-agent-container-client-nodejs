import { AgentObject } from './agentObject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentText
 */
export class AgentText extends AgentObject {
  public chatPartialMessage?: boolean;
  public chatContinueListening?: boolean;
  public chatPartialGeneratedMessage?: string;
  public chatMessageActorSequence?: string;
  public chatGeneratedMessage?: string;
  public textToSpeak?: string;
  public chatIncrementalGeneratedMessage?: string;
  public chatPriorUserMessage?: string;
  public chatVoiceMessage?: string;
  public agentText?: string;
  public chatIncrementalMessage?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentText';
  }

  /**
   * Get property definitions for AgentText
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isChatPartialMessage',
        tsPropertyName: 'chatPartialMessage',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isChatContinueListening',
        tsPropertyName: 'chatContinueListening',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatPartialGeneratedMessage',
        tsPropertyName: 'chatPartialGeneratedMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatMessageActorSequence',
        tsPropertyName: 'chatMessageActorSequence',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatGeneratedMessage',
        tsPropertyName: 'chatGeneratedMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextToSpeak',
        tsPropertyName: 'textToSpeak',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatIncrementalGeneratedMessage',
        tsPropertyName: 'chatIncrementalGeneratedMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatPriorUserMessage',
        tsPropertyName: 'chatPriorUserMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatVoiceMessage',
        tsPropertyName: 'chatVoiceMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAgentText',
        tsPropertyName: 'agentText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isChatIncrementalMessage',
        tsPropertyName: 'chatIncrementalMessage',
        type: 'boolean',
        required: false
      }
    ];
  }


}
