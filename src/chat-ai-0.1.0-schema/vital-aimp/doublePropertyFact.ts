import { PropertyFact } from './propertyFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DoublePropertyFact
 */
export class DoublePropertyFact extends PropertyFact {
  public doubleValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DoublePropertyFact';
  }

  /**
   * Get property definitions for DoublePropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDoubleValue',
        tsPropertyName: 'doubleValue',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
