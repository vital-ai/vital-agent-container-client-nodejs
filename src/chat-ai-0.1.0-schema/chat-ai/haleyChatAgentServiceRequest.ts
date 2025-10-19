import { HaleyChatAgentServiceCommand } from './haleyChatAgentServiceCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAgentServiceRequest
 */
export class HaleyChatAgentServiceRequest extends HaleyChatAgentServiceCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAgentServiceRequest';
  }

  /**
   * Get property definitions for HaleyChatAgentServiceRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
