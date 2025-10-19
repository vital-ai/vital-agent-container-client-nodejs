import { Payment } from './payment';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#StripePayment
 */
export class StripePayment extends Payment {
  public json?: string;
  public token?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#StripePayment';
  }

  /**
   * Get property definitions for StripePayment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJson',
        tsPropertyName: 'json',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasToken',
        tsPropertyName: 'token',
        type: 'string',
        required: false
      }
    ];
  }


}
