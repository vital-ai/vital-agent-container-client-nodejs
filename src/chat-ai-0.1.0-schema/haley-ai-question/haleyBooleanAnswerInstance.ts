import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyBooleanAnswerInstance
 */
export class HaleyBooleanAnswerInstance extends HaleyAnswerInstance {
  public booleanAnswerValue?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyBooleanAnswerInstance';
  }

  /**
   * Get property definitions for HaleyBooleanAnswerInstance
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
