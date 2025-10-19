import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Payment
 */
export class Payment extends AIMPThing {
  public address?: string;
  public id?: string;
  public currencySymbol?: string;
  public chargeAmount?: number;
  public fullName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Payment';
  }

  /**
   * Get property definitions for Payment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAddress',
        tsPropertyName: 'address',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasId',
        tsPropertyName: 'id',
        type: 'string',
        required: false
      },
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
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFullName',
        tsPropertyName: 'fullName',
        type: 'string',
        required: false
      }
    ];
  }


}
