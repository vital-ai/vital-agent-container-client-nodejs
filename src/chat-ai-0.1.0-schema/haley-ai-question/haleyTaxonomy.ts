import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyTaxonomy
 */
export class HaleyTaxonomy extends VITAL_Node {
  public haleyTaxonomyBaseVersion?: string;
  public haleyTaxonomyBase?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyTaxonomy';
  }

  /**
   * Get property definitions for HaleyTaxonomy
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBaseVersion',
        tsPropertyName: 'haleyTaxonomyBaseVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyTaxonomyBase',
        tsPropertyName: 'haleyTaxonomyBase',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
