import { HaleyChatAlert } from './haleyChatAlert';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAccountOwnershipChangeAlert
 */
export class HaleyChatAccountOwnershipChangeAlert extends HaleyChatAlert {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAccountOwnershipChangeAlert';
  }

  /**
   * Get property definitions for HaleyChatAccountOwnershipChangeAlert
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
