import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AskConfirmEmailRequest
 */
export class AskConfirmEmailRequest extends HaleyChatCommand {
  public requestedEmailAddress?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AskConfirmEmailRequest';
  }

  /**
   * Get property definitions for AskConfirmEmailRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasRequestedEmailAddress',
        tsPropertyName: 'requestedEmailAddress',
        type: 'string',
        required: false
      }
    ];
  }


}
