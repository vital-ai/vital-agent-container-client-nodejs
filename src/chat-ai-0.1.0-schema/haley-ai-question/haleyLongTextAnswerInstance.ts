import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyLongTextAnswerInstance
 */
export class HaleyLongTextAnswerInstance extends HaleyAnswerInstance {
  public longTextAnswerValue?: string;
  public longTextAnalyzedAnswerValue?: string;
  public haleyLanguageType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyLongTextAnswerInstance';
  }

  /**
   * Get property definitions for HaleyLongTextAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLongTextAnswerValue',
        tsPropertyName: 'longTextAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasLongTextAnalyzedAnswerValue',
        tsPropertyName: 'longTextAnalyzedAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyLanguageType',
        tsPropertyName: 'haleyLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
