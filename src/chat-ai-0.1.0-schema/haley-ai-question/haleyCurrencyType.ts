import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyCurrencyType
 */
export class HaleyCurrencyType extends VITAL_Node {
  public currencySymbol?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyCurrencyType';
  }

  /**
   * Get property definitions for HaleyCurrencyType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCurrencySymbol',
        tsPropertyName: 'currencySymbol',
        type: 'string',
        required: false
      }
    ];
  }


}
