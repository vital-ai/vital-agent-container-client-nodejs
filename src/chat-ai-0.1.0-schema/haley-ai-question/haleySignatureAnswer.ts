import { HaleyAnswer } from './haleyAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswer
 */
export class HaleySignatureAnswer extends HaleyAnswer {
  public anchorAnswer?: boolean;
  public haleySignatureAnswerStyleURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleySignatureAnswer';
  }

  /**
   * Get property definitions for HaleySignatureAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnchorAnswer',
        tsPropertyName: 'anchorAnswer',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleySignatureAnswerStyleURI',
        tsPropertyName: 'haleySignatureAnswerStyleURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
