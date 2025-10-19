import { HaleyChatAgentCommand } from './haleyChatAgentCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AddReviewAgentRequest
 */
export class AddReviewAgentRequest extends HaleyChatAgentCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AddReviewAgentRequest';
  }

  /**
   * Get property definitions for AddReviewAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
