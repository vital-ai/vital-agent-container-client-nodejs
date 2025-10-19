import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultChoiceAnswer
 */
export class HaleyDefaultChoiceAnswer extends HaleyDefaultAnswer {
  public choiceAnswerValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultChoiceAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultChoiceAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue',
        tsPropertyName: 'choiceAnswerValue',
        type: 'string',
        required: false
      }
    ];
  }


}
