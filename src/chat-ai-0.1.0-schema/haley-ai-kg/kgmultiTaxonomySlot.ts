import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomySlot
 */
export class KGMultiTaxonomySlot extends KGSlot {
  /** URI reference to one of: TaxonomyNode, KGCategory */
  public multiTaxonomySlotValues?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGMultiTaxonomySlot';
  }

  /**
   * Get property definitions for KGMultiTaxonomySlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasMultiTaxonomySlotValues',
        tsPropertyName: 'multiTaxonomySlotValues',
        type: 'http://vital.ai/ontology/haley-taxonomy#TaxonomyNode | http://vital.ai/ontology/haley-ai-kg#KGCategory',
        required: false,
        format: 'uri'
      }
    ];
  }


}
