import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#DeleteAccountOpportunityAdminRequest
 */
export class DeleteAccountOpportunityAdminRequest extends HaleyChatAdminCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#DeleteAccountOpportunityAdminRequest';
  }

  /**
   * Get property definitions for DeleteAccountOpportunityAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
