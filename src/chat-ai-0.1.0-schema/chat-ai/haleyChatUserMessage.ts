import { HaleyChatMessage } from './haleyChatMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatUserMessage
 */
export class HaleyChatUserMessage extends HaleyChatMessage {
  public haleyChatIntentURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatUserMessage';
  }

  /**
   * Get property definitions for HaleyChatUserMessage
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
      }
    ];
  }


}
