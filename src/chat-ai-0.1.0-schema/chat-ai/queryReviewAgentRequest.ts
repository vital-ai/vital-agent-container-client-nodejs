import { HaleyChatAgentCommand } from './haleyChatAgentCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#QueryReviewAgentRequest
 */
export class QueryReviewAgentRequest extends HaleyChatAgentCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#QueryReviewAgentRequest';
  }

  /**
   * Get property definitions for QueryReviewAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
