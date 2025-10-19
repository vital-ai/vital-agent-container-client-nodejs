import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultTaxonomyAnswer
 */
export class HaleyDefaultTaxonomyAnswer extends HaleyDefaultAnswer {
  public taxonomyAnswerValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultTaxonomyAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultTaxonomyAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasTaxonomyAnswerValue',
        tsPropertyName: 'taxonomyAnswerValue',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
