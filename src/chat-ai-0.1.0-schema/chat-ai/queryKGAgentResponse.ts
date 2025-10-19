import { HaleyChatAgentResponse } from './haleyChatAgentResponse';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#QueryKGAgentResponse
 */
export class QueryKGAgentResponse extends HaleyChatAgentResponse {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#QueryKGAgentResponse';
  }

  /**
   * Get property definitions for QueryKGAgentResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
