import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultTextAnswer
 */
export class HaleyDefaultTextAnswer extends HaleyDefaultAnswer {
  public textAnswerValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultTextAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultTextAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue',
        tsPropertyName: 'textAnswerValue',
        type: 'string',
        required: false
      }
    ];
  }


}
