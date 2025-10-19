import { VITAL_Fact } from '../vital/vitalFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PropertyFact
 */
export class PropertyFact extends VITAL_Fact {
  public factScope?: string;
  public propertyValue?: string;
  public propertyName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PropertyFact';
  }

  /**
   * Get property definitions for PropertyFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactScope',
        tsPropertyName: 'factScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyValue',
        tsPropertyName: 'propertyValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      }
    ];
  }


}
