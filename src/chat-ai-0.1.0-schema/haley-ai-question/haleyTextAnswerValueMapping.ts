import { HaleyAnswerValueMapping } from './haleyAnswerValueMapping';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTextAnswerValueMapping
 */
export class HaleyTextAnswerValueMapping extends HaleyAnswerValueMapping {
  public textAnswerValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyTextAnswerValueMapping';
  }

  /**
   * Get property definitions for HaleyTextAnswerValueMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTextAnswerValue',
        tsPropertyName: 'textAnswerValue',
        type: 'string',
        required: false
      }
    ];
  }


}
