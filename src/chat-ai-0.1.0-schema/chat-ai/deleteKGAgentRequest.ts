import { HaleyChatAgentRequest } from './haleyChatAgentRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#DeleteKGAgentRequest
 */
export class DeleteKGAgentRequest extends HaleyChatAgentRequest {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#DeleteKGAgentRequest';
  }

  /**
   * Get property definitions for DeleteKGAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
