import { HaleyChatAgentCommand } from './haleyChatAgentCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#DeleteReviewAgentRequest
 */
export class DeleteReviewAgentRequest extends HaleyChatAgentCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#DeleteReviewAgentRequest';
  }

  /**
   * Get property definitions for DeleteReviewAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
