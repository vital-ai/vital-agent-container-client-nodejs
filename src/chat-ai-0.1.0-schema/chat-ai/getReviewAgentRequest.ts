import { HaleyChatAgentCommand } from './haleyChatAgentCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetReviewAgentRequest
 */
export class GetReviewAgentRequest extends HaleyChatAgentCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetReviewAgentRequest';
  }

  /**
   * Get property definitions for GetReviewAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
