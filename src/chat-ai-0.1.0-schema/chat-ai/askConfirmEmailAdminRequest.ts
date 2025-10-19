import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AskConfirmEmailAdminRequest
 */
export class AskConfirmEmailAdminRequest extends HaleyChatAdminCommand {
  public requestedEmailAddress?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AskConfirmEmailAdminRequest';
  }

  /**
   * Get property definitions for AskConfirmEmailAdminRequest
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
