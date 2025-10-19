import { HaleyAnswer } from './haleyAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyChoiceAnswer
 */
export class HaleyChoiceAnswer extends HaleyAnswer {
  public answerSetSourceURI?: string;
  public answerSetOptions?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyChoiceAnswer';
  }

  /**
   * Get property definitions for HaleyChoiceAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerSetSourceURI',
        tsPropertyName: 'answerSetSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnswerSetOptions',
        tsPropertyName: 'answerSetOptions',
        type: 'boolean',
        required: false
      }
    ];
  }


}
