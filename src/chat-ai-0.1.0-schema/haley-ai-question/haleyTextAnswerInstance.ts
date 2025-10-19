import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTextAnswerInstance
 */
export class HaleyTextAnswerInstance extends HaleyAnswerInstance {
  public textAnswerValue?: string;
  public textAnalyzedAnswerValue?: string;
  public haleyLanguageType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyTextAnswerInstance';
  }

  /**
   * Get property definitions for HaleyTextAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue',
        tsPropertyName: 'textAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTextAnalyzedAnswerValue',
        tsPropertyName: 'textAnalyzedAnswerValue',
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
