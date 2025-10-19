import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#UpdateAccountAdminRequest
 */
export class UpdateAccountAdminRequest extends HaleyChatAdminCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#UpdateAccountAdminRequest';
  }

  /**
   * Get property definitions for UpdateAccountAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
