import { HaleyChatMessage } from './haleyChatMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatBotMessage
 */
export class HaleyChatBotMessage extends HaleyChatMessage {
  public agentVariantURI?: string;
  public chatContinueListening?: boolean;
  public chatPartialGeneratedMessage?: string;
  public chatGeneratedMessage?: string;
  public chatIncrementalGeneratedMessage?: string;
  public haleyChatQuotaStatusURI?: string;
  public chatPriorUserMessage?: string;
  public chatVoiceMessage?: string;
  public agentInstallURI?: string;
  public haleyChatReplyToIntentURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatBotMessage';
  }

  /**
   * Get property definitions for HaleyChatBotMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentVariantURI',
        tsPropertyName: 'agentVariantURI',
        type: 'string',
        required: false,
        format: 'uri'
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatGeneratedMessage',
        tsPropertyName: 'chatGeneratedMessage',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaStatusURI',
        tsPropertyName: 'haleyChatQuotaStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentInstallURI',
        tsPropertyName: 'agentInstallURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatReplyToIntentURI',
        tsPropertyName: 'haleyChatReplyToIntentURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
