import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerInstance
 */
export class HaleySignatureAnswerInstance extends HaleyAnswerInstance {
  public answerInstanceImageHeight?: string;
  public answerInstanceImageURL?: string;
  public signatureAnswerValue?: string;
  public haleySignatureAnswerStyleURI?: string;
  public anchorAnswerInstance?: boolean;
  public answerInstanceImageWidth?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswerInstance';
  }

  /**
   * Get property definitions for HaleySignatureAnswerInstance
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSignatureAnswerValue',
        tsPropertyName: 'signatureAnswerValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleySignatureAnswerStyleURI',
        tsPropertyName: 'haleySignatureAnswerStyleURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnchorAnswerInstance',
        tsPropertyName: 'anchorAnswerInstance',
        type: 'boolean',
        required: false
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
