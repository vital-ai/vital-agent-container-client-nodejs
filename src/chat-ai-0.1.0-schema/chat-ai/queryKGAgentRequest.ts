import { HaleyChatAgentRequest } from './haleyChatAgentRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#QueryKGAgentRequest
 */
export class QueryKGAgentRequest extends HaleyChatAgentRequest {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#QueryKGAgentRequest';
  }

  /**
   * Get property definitions for QueryKGAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
