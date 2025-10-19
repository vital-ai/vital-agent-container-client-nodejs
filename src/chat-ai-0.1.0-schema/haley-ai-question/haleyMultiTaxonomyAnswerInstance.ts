import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyMultiTaxonomyAnswerInstance
 */
export class HaleyMultiTaxonomyAnswerInstance extends HaleyAnswerInstance {
  public multiTaxonomyAnswerValue?: string[];


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyMultiTaxonomyAnswerInstance';
  }

  /**
   * Get property definitions for HaleyMultiTaxonomyAnswerInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMultiTaxonomyAnswerValue',
        tsPropertyName: 'multiTaxonomyAnswerValue',
        type: 'string[]',
        required: false
      }
    ];
  }


}
