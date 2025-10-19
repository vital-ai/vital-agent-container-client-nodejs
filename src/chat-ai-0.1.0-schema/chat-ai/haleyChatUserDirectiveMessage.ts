import { HaleyChatUserMessage } from './haleyChatUserMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatUserDirectiveMessage
 */
export class HaleyChatUserDirectiveMessage extends HaleyChatUserMessage {
  public haleyChatInteractionObjectiveTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatUserDirectiveMessage';
  }

  /**
   * Get property definitions for HaleyChatUserDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionObjectiveTypeURI',
        tsPropertyName: 'haleyChatInteractionObjectiveTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
