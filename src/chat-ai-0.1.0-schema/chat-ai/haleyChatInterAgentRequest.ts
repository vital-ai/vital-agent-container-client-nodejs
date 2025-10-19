import { HaleyChatInterAgentCommand } from './haleyChatInterAgentCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatInterAgentRequest
 */
export class HaleyChatInterAgentRequest extends HaleyChatInterAgentCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatInterAgentRequest';
  }

  /**
   * Get property definitions for HaleyChatInterAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
