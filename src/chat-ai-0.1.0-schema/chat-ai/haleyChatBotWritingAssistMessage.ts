import { HaleyChatBotMessage } from './haleyChatBotMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatBotWritingAssistMessage
 */
export class HaleyChatBotWritingAssistMessage extends HaleyChatBotMessage {
  public chatEditingSourceContentType?: string;
  public chatEditingResultMessage?: string;
  public chatEditingSourceMessage?: string;
  public chatEditingResultContentType?: string;
  public chatEditingInstructionsMessage?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatBotWritingAssistMessage';
  }

  /**
   * Get property definitions for HaleyChatBotWritingAssistMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatEditingSourceContentType',
        tsPropertyName: 'chatEditingSourceContentType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatEditingResultMessage',
        tsPropertyName: 'chatEditingResultMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatEditingSourceMessage',
        tsPropertyName: 'chatEditingSourceMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatEditingResultContentType',
        tsPropertyName: 'chatEditingResultContentType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatEditingInstructionsMessage',
        tsPropertyName: 'chatEditingInstructionsMessage',
        type: 'string',
        required: false
      }
    ];
  }


}
