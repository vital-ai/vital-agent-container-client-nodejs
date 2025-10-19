import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ShoppingCart
 */
export class ShoppingCart extends Card {
  public tax?: number;
  public quantityData?: string;
  public shippingFee?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ShoppingCart';
  }

  /**
   * Get property definitions for ShoppingCart
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTax',
        tsPropertyName: 'tax',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuantityData',
        tsPropertyName: 'quantityData',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasShippingFee',
        tsPropertyName: 'shippingFee',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
