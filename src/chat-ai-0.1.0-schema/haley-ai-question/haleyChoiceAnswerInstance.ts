import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyChoiceAnswerInstance
 */
export class HaleyChoiceAnswerInstance extends HaleyAnswerInstance {
  public choiceAnswerValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyChoiceAnswerInstance';
  }

  /**
   * Get property definitions for HaleyChoiceAnswerInstance
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
