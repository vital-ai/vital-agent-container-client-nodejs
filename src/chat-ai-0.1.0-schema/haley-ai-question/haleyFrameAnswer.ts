import { HaleyAnswer } from './haleyAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswer
 */
export class HaleyFrameAnswer extends HaleyAnswer {
  public haleyFrameAnswerTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswer';
  }

  /**
   * Get property definitions for HaleyFrameAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyFrameAnswerTypeURI',
        tsPropertyName: 'haleyFrameAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
