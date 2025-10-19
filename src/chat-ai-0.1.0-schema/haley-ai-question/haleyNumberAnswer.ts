import { HaleyAnswer } from './haleyAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswer
 */
export class HaleyNumberAnswer extends HaleyAnswer {
  public haleyCurrencyType?: string;
  public haleyAnswerSignificantDigits?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswer';
  }

  /**
   * Get property definitions for HaleyNumberAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType',
        tsPropertyName: 'haleyCurrencyType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerSignificantDigits',
        tsPropertyName: 'haleyAnswerSignificantDigits',
        type: 'number',
        required: false
      }
    ];
  }


}
