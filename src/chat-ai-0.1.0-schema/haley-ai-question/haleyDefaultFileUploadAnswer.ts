import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultFileUploadAnswer
 */
export class HaleyDefaultFileUploadAnswer extends HaleyDefaultAnswer {
  public fileAnswerValueURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultFileUploadAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultFileUploadAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasFileAnswerValueURI',
        tsPropertyName: 'fileAnswerValueURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
