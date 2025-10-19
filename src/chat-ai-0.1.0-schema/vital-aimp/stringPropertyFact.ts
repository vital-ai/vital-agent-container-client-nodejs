import { PropertyFact } from './propertyFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#StringPropertyFact
 */
export class StringPropertyFact extends PropertyFact {
  public stringValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#StringPropertyFact';
  }

  /**
   * Get property definitions for StringPropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStringValue',
        tsPropertyName: 'stringValue',
        type: 'string',
        required: false
      }
    ];
  }


}
