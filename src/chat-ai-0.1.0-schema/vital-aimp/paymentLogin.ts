import { Login } from '../vital/login';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PaymentLogin
 */
export class PaymentLogin extends Login {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PaymentLogin';
  }

  /**
   * Get property definitions for PaymentLogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
