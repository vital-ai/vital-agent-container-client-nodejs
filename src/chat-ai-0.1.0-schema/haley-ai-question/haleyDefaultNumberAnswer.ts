import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultNumberAnswer
 */
export class HaleyDefaultNumberAnswer extends HaleyDefaultAnswer {
  public doubleAnswerValue?: number;
  public integerAnswerValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultNumberAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultNumberAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue',
        tsPropertyName: 'doubleAnswerValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue',
        tsPropertyName: 'integerAnswerValue',
        type: 'number',
        required: false
      }
    ];
  }


}
