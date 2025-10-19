import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Invoice
 */
export class Invoice extends AIMPThing {
  public currencySymbol?: string;
  public chargeAmount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Invoice';
  }

  /**
   * Get property definitions for Invoice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCurrencySymbol',
        tsPropertyName: 'currencySymbol',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChargeAmount',
        tsPropertyName: 'chargeAmount',
        type: 'number',
        required: false
      }
    ];
  }


}
