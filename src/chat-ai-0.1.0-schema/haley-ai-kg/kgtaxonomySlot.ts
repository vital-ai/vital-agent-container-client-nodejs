import { KGSlot } from './kgslot';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTaxonomySlot
 */
export class KGTaxonomySlot extends KGSlot {
  /** URI reference to one of: TaxonomyNode, KGCategory */
  public taxonomySlotValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGTaxonomySlot';
  }

  /**
   * Get property definitions for KGTaxonomySlot
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasTaxonomySlotValue',
        tsPropertyName: 'taxonomySlotValue',
        type: 'http://vital.ai/ontology/haley-taxonomy#TaxonomyNode | http://vital.ai/ontology/haley-ai-kg#KGCategory',
        required: false,
        format: 'uri'
      }
    ];
  }


}
