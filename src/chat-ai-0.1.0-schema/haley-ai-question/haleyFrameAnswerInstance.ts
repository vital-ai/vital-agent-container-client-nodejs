import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswerInstance
 */
export class HaleyFrameAnswerInstance extends HaleyAnswerInstance {
  public frameAnswerValue?: string;
  public frameAnswerValueEncoding?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyFrameAnswerInstance';
  }

  /**
   * Get property definitions for HaleyFrameAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFrameAnswerValue',
        tsPropertyName: 'frameAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFrameAnswerValueEncoding',
        tsPropertyName: 'frameAnswerValueEncoding',
        type: 'string',
        required: false
      }
    ];
  }


}
