import { HaleyChatAgentResponse } from './haleyChatAgentResponse';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GenerateTextAgentResponse
 */
export class GenerateTextAgentResponse extends HaleyChatAgentResponse {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GenerateTextAgentResponse';
  }

  /**
   * Get property definitions for GenerateTextAgentResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
