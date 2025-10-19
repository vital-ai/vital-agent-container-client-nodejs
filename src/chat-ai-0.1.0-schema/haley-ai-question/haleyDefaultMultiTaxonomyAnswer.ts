import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultMultiTaxonomyAnswer
 */
export class HaleyDefaultMultiTaxonomyAnswer extends HaleyDefaultAnswer {
  public multiTaxonomyAnswerValue?: string[];


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultMultiTaxonomyAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultMultiTaxonomyAnswer
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
