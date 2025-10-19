import { PropertyFact } from './propertyFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GroupStringPropertyFact
 */
export class GroupStringPropertyFact extends PropertyFact {
  public stringValue?: string;
  public index?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#GroupStringPropertyFact';
  }

  /**
   * Get property definitions for GroupStringPropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStringValue',
        tsPropertyName: 'stringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIndex',
        tsPropertyName: 'index',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
