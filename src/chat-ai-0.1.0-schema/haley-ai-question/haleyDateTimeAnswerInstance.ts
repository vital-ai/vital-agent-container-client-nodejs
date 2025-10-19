import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswerInstance
 */
export class HaleyDateTimeAnswerInstance extends HaleyAnswerInstance {
  public anchorAnswerInstance?: boolean;
  public dateTimeAnswerValue?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswerInstance';
  }

  /**
   * Get property definitions for HaleyDateTimeAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnchorAnswerInstance',
        tsPropertyName: 'anchorAnswerInstance',
        type: 'boolean',
        required: false
      },
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
