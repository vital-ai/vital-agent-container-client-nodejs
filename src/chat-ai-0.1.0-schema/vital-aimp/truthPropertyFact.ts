import { PropertyFact } from './propertyFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TruthPropertyFact
 */
export class TruthPropertyFact extends PropertyFact {
  public truthValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#TruthPropertyFact';
  }

  /**
   * Get property definitions for TruthPropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTruthValue',
        tsPropertyName: 'truthValue',
        type: 'string',
        required: false
      }
    ];
  }


}
