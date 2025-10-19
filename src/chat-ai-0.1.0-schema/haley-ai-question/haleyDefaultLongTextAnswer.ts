import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultLongTextAnswer
 */
export class HaleyDefaultLongTextAnswer extends HaleyDefaultAnswer {
  public longTextAnswerValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultLongTextAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultLongTextAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue',
        tsPropertyName: 'longTextAnswerValue',
        type: 'string',
        required: false
      }
    ];
  }


}
