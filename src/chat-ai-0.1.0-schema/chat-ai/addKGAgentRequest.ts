import { HaleyChatAgentRequest } from './haleyChatAgentRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AddKGAgentRequest
 */
export class AddKGAgentRequest extends HaleyChatAgentRequest {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AddKGAgentRequest';
  }

  /**
   * Get property definitions for AddKGAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
