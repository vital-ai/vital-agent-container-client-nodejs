import { HaleyChatPayment } from './haleyChatPayment';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionPayment
 */
export class HaleyChatSubscriptionPayment extends HaleyChatPayment {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionPayment';
  }

  /**
   * Get property definitions for HaleyChatSubscriptionPayment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
