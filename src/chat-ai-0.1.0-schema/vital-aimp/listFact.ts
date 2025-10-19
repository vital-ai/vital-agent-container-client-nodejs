import { VITAL_Fact } from '../vital/vitalFact';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ListFact
 */
export class ListFact extends VITAL_Fact {
  public graphObjectsLinked?: boolean;
  public propertyName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ListFact';
  }

  /**
   * Get property definitions for ListFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGraphObjectsLinked',
        tsPropertyName: 'graphObjectsLinked',
        type: 'boolean',
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
