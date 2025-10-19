import { HaleyAnswer } from './haleyAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswer
 */
export class HaleyDateTimeAnswer extends HaleyAnswer {
  public anchorAnswer?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDateTimeAnswer';
  }

  /**
   * Get property definitions for HaleyDateTimeAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnchorAnswer',
        tsPropertyName: 'anchorAnswer',
        type: 'boolean',
        required: false
      }
    ];
  }


}
