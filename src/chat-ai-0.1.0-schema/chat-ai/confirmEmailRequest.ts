import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ConfirmEmailRequest
 */
export class ConfirmEmailRequest extends HaleyChatCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ConfirmEmailRequest';
  }

  /**
   * Get property definitions for ConfirmEmailRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
