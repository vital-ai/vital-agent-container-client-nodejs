import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswerInstance
 */
export class HaleyNumberAnswerInstance extends HaleyAnswerInstance {
  public doubleAnswerValue?: number;
  public integerAnswerValue?: number;
  public haleyCurrencyType?: string;
  public haleyAnswerSignificantDigits?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyNumberAnswerInstance';
  }

  /**
   * Get property definitions for HaleyNumberAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDoubleAnswerValue',
        tsPropertyName: 'doubleAnswerValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasIntegerAnswerValue',
        tsPropertyName: 'integerAnswerValue',
        type: 'number',
        required: false
      },
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
