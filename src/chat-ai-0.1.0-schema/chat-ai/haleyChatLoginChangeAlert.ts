import { HaleyChatAlert } from './haleyChatAlert';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatLoginChangeAlert
 */
export class HaleyChatLoginChangeAlert extends HaleyChatAlert {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatLoginChangeAlert';
  }

  /**
   * Get property definitions for HaleyChatLoginChangeAlert
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
