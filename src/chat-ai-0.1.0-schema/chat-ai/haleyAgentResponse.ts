import { HaleyChatAgentResponse } from './haleyChatAgentResponse';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyAgentResponse
 */
export class HaleyAgentResponse extends HaleyChatAgentResponse {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyAgentResponse';
  }

  /**
   * Get property definitions for HaleyAgentResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
