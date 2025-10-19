import { HaleyChatAgentAdminCommand } from './haleyChatAgentAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#DeleteAgentAdminRequest
 */
export class DeleteAgentAdminRequest extends HaleyChatAgentAdminCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#DeleteAgentAdminRequest';
  }

  /**
   * Get property definitions for DeleteAgentAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
