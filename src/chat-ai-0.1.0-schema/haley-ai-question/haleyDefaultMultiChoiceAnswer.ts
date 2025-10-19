import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultMultiChoiceAnswer
 */
export class HaleyDefaultMultiChoiceAnswer extends HaleyDefaultAnswer {
  public multiChoiceAnswerValue?: string[];
  public choiceAnswerValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultMultiChoiceAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultMultiChoiceAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue',
        tsPropertyName: 'multiChoiceAnswerValue',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasChoiceAnswerValue',
        tsPropertyName: 'choiceAnswerValue',
        type: 'string',
        required: false
      }
    ];
  }


}
