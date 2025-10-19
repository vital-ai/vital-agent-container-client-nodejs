import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultBooleanAnswer
 */
export class HaleyDefaultBooleanAnswer extends HaleyDefaultAnswer {
  public booleanAnswerValue?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultBooleanAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultBooleanAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasBooleanAnswerValue',
        tsPropertyName: 'booleanAnswerValue',
        type: 'boolean',
        required: false
      }
    ];
  }


}
