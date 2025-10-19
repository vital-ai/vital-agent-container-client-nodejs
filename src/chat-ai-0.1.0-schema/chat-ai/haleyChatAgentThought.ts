import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAgentThought
 */
export class HaleyChatAgentThought extends VITAL_Node {
  public haleyChatAgentThoughtTypeURI?: string;
  public chatPartialMessage?: boolean;
  /** URI reference to one of: AIMPMessage, HaleyChatMessage */
  public haleyChatReferenceMessageURI?: string;
  public haleyChatThoughtText?: string;
  public haleyChatInteractionURI?: string;
  /** URI reference to one of: AgentObject, HaleyChatMessage */
  public bridgeHaleyMessageURI?: string;
  public haleyChatThoughtComplete?: boolean;
  public haleyChatThoughtTitle?: string;
  public aIMPMessageContentURI?: string;
  public haleyChatThoughtSequence?: number;
  public haleyChatMessageURI?: string;
  public chatIncrementalMessage?: boolean;
  /** URI reference to one of: AIMPMessageContent, HaleyChatMessage */
  public haleyChatMessageHistoryURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAgentThought';
  }

  /**
   * Get property definitions for HaleyChatAgentThought
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAgentThoughtTypeURI',
        tsPropertyName: 'haleyChatAgentThoughtTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isChatPartialMessage',
        tsPropertyName: 'chatPartialMessage',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatReferenceMessageURI',
        tsPropertyName: 'haleyChatReferenceMessageURI',
        type: 'http://vital.ai/ontology/vital-aimp#AIMPMessage | http://vital.ai/ontology/chat-ai#HaleyChatMessage',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatThoughtText',
        tsPropertyName: 'haleyChatThoughtText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI',
        tsPropertyName: 'haleyChatInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasBridgeHaleyMessageURI',
        tsPropertyName: 'bridgeHaleyMessageURI',
        type: 'http://vital.ai/ontology/vital-aimp#AgentObject | http://vital.ai/ontology/chat-ai#HaleyChatMessage',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyChatThoughtComplete',
        tsPropertyName: 'haleyChatThoughtComplete',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatThoughtTitle',
        tsPropertyName: 'haleyChatThoughtTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPMessageContentURI',
        tsPropertyName: 'aIMPMessageContentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatThoughtSequence',
        tsPropertyName: 'haleyChatThoughtSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatMessageURI',
        tsPropertyName: 'haleyChatMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isChatIncrementalMessage',
        tsPropertyName: 'chatIncrementalMessage',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatMessageHistoryURI',
        tsPropertyName: 'haleyChatMessageHistoryURI',
        type: 'http://vital.ai/ontology/vital-aimp#AIMPMessageContent | http://vital.ai/ontology/chat-ai#HaleyChatMessage',
        required: false,
        format: 'uri'
      }
    ];
  }


}
