import { HaleyChatAgentAdminCommand } from './haleyChatAgentAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ReviseAgentAdminRequest
 */
export class ReviseAgentAdminRequest extends HaleyChatAgentAdminCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ReviseAgentAdminRequest';
  }

  /**
   * Get property definitions for ReviseAgentAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
