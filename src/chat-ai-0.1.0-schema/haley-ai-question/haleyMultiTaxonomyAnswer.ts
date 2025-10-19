import { HaleyAnswer } from './haleyAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyMultiTaxonomyAnswer
 */
export class HaleyMultiTaxonomyAnswer extends HaleyAnswer {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyMultiTaxonomyAnswer';
  }

  /**
   * Get property definitions for HaleyMultiTaxonomyAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
