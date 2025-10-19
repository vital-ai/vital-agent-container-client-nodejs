import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyMultiChoiceAnswerInstance
 */
export class HaleyMultiChoiceAnswerInstance extends HaleyAnswerInstance {
  public multiChoiceAnswerValue?: string[];


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyMultiChoiceAnswerInstance';
  }

  /**
   * Get property definitions for HaleyMultiChoiceAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMultiChoiceAnswerValue',
        tsPropertyName: 'multiChoiceAnswerValue',
        type: 'string[]',
        required: false
      }
    ];
  }


}
