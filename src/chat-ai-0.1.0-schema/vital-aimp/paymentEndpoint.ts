import { Endpoint } from './endpoint';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PaymentEndpoint
 */
export class PaymentEndpoint extends Endpoint {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PaymentEndpoint';
  }

  /**
   * Get property definitions for PaymentEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
