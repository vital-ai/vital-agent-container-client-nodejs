import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyFileUploadAnswerInstance
 */
export class HaleyFileUploadAnswerInstance extends HaleyAnswerInstance {
  public answerInstanceImageHeight?: string;
  public answerInstanceImageURL?: string;
  public fileAnswerValueURI?: string;
  public answerInstanceImageWidth?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyFileUploadAnswerInstance';
  }

  /**
   * Get property definitions for HaleyFileUploadAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageHeight',
        tsPropertyName: 'answerInstanceImageHeight',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageURL',
        tsPropertyName: 'answerInstanceImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI',
        tsPropertyName: 'fileAnswerValueURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerInstanceImageWidth',
        tsPropertyName: 'answerInstanceImageWidth',
        type: 'string',
        required: false
      }
    ];
  }


}
