import { HaleyChatAgentResponse } from './haleyChatAgentResponse';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GenerateImageAgentResponse
 */
export class GenerateImageAgentResponse extends HaleyChatAgentResponse {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GenerateImageAgentResponse';
  }

  /**
   * Get property definitions for GenerateImageAgentResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
