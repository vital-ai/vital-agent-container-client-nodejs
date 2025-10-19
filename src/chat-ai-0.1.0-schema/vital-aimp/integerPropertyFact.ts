import { PropertyFact } from './propertyFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#IntegerPropertyFact
 */
export class IntegerPropertyFact extends PropertyFact {
  public integerValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#IntegerPropertyFact';
  }

  /**
   * Get property definitions for IntegerPropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIntegerValue',
        tsPropertyName: 'integerValue',
        type: 'number',
        required: false
      }
    ];
  }


}
