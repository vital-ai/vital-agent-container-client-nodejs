import { HaleyRequestMessage } from '../haley/haleyRequestMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAgentAdminCommand
 */
export class HaleyChatAgentAdminCommand extends HaleyRequestMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAgentAdminCommand';
  }

  /**
   * Get property definitions for HaleyChatAgentAdminCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
