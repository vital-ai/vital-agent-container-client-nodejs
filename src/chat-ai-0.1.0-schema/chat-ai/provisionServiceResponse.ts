import { HaleyChatResponse } from './haleyChatResponse';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ProvisionServiceResponse
 */
export class ProvisionServiceResponse extends HaleyChatResponse {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ProvisionServiceResponse';
  }

  /**
   * Get property definitions for ProvisionServiceResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
