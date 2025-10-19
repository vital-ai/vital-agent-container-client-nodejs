import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultDateTimeAnswer
 */
export class HaleyDefaultDateTimeAnswer extends HaleyDefaultAnswer {
  public dateTimeAnswerValue?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultDateTimeAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultDateTimeAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDateTimeAnswerValue',
        tsPropertyName: 'dateTimeAnswerValue',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
