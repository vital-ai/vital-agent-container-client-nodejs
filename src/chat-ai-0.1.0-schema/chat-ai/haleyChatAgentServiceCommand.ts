import { HaleyRequestMessage } from '../haley/haleyRequestMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAgentServiceCommand
 */
export class HaleyChatAgentServiceCommand extends HaleyRequestMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAgentServiceCommand';
  }

  /**
   * Get property definitions for HaleyChatAgentServiceCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
