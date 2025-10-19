import { PropertyFact } from './propertyFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BooleanPropertyFact
 */
export class BooleanPropertyFact extends PropertyFact {
  public booleanValue?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#BooleanPropertyFact';
  }

  /**
   * Get property definitions for BooleanPropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBooleanValue',
        tsPropertyName: 'booleanValue',
        type: 'boolean',
        required: false
      }
    ];
  }


}
