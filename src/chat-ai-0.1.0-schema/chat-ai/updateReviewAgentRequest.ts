import { HaleyChatAgentCommand } from './haleyChatAgentCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#UpdateReviewAgentRequest
 */
export class UpdateReviewAgentRequest extends HaleyChatAgentCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#UpdateReviewAgentRequest';
  }

  /**
   * Get property definitions for UpdateReviewAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
