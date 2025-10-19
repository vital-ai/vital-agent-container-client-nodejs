import { HaleyChatMessage } from './haleyChatMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatCardMessage
 */
export class HaleyChatCardMessage extends HaleyChatMessage {
  public haleyChatIntentURI?: string;
  public messageSerialized?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatCardMessage';
  }

  /**
   * Get property definitions for HaleyChatCardMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatIntentURI',
        tsPropertyName: 'haleyChatIntentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageSerialized',
        tsPropertyName: 'messageSerialized',
        type: 'string',
        required: false
      }
    ];
  }


}
