import { HaleyChatAgentAdminCommand } from './haleyChatAgentAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#DeployAgentInstanceAdminRequest
 */
export class DeployAgentInstanceAdminRequest extends HaleyChatAgentAdminCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#DeployAgentInstanceAdminRequest';
  }

  /**
   * Get property definitions for DeployAgentInstanceAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
