import { TaxonomyNode } from '../haley-taxonomy/taxonomyNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#NewsContentCategory
 */
export class NewsContentCategory extends TaxonomyNode {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#NewsContentCategory';
  }

  /**
   * Get property definitions for NewsContentCategory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
