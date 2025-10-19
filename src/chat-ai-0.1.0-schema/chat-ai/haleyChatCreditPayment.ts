import { HaleyChatPayment } from './haleyChatPayment';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatCreditPayment
 */
export class HaleyChatCreditPayment extends HaleyChatPayment {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatCreditPayment';
  }

  /**
   * Get property definitions for HaleyChatCreditPayment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
