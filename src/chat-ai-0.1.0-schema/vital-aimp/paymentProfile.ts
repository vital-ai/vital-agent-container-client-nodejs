import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PaymentProfile
 */
export class PaymentProfile extends EndpointProfile {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PaymentProfile';
  }

  /**
   * Get property definitions for PaymentProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
