import { HaleyChatRequest } from './haleyChatRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ProvisionServiceRequest
 */
export class ProvisionServiceRequest extends HaleyChatRequest {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ProvisionServiceRequest';
  }

  /**
   * Get property definitions for ProvisionServiceRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
