import { Answer } from './answer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TrueFalseAnswer
 */
export class TrueFalseAnswer extends Answer {
  public booleanValue?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#TrueFalseAnswer';
  }

  /**
   * Get property definitions for TrueFalseAnswer
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
