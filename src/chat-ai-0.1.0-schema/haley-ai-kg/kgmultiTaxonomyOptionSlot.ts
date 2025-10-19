import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomyOptionSlot
 */
export class KGMultiTaxonomyOptionSlot extends KGSlot {
  /** URI reference to one of: HaleyTaxonomy, KGCategoryType */
  public kGTaxonomyOptionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomyOptionSlot';
  }

  /**
   * Get property definitions for KGMultiTaxonomyOptionSlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTaxonomyOptionURI',
        tsPropertyName: 'kGTaxonomyOptionURI',
        type: 'http://vital.ai/ontology/haley-ai-question#HaleyTaxonomy | http://vital.ai/ontology/haley-ai-kg#KGCategoryType',
        required: false,
        format: 'uri'
      }
    ];
  }


}
