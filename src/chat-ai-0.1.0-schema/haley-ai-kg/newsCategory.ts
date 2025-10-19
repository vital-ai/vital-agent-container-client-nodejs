import { TaxonomyNode } from '../haley-taxonomy/taxonomyNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#NewsCategory
 */
export class NewsCategory extends TaxonomyNode {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#NewsCategory';
  }

  /**
   * Get property definitions for NewsCategory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
