import { HaleyAnswerInstance } from './haleyAnswerInstance';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyAnswerInstance
 */
export class HaleyTaxonomyAnswerInstance extends HaleyAnswerInstance {
  public taxonomyAnswerValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyTaxonomyAnswerInstance';
  }

  /**
   * Get property definitions for HaleyTaxonomyAnswerInstance
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
