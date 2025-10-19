import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasTaxonomy
 */
export class Edge_hasTaxonomy extends VITAL_PeerEdge {
  public haleyTaxonomyBaseVersion?: string;
  public haleyTaxonomyBase?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasTaxonomy';
  }

  /**
   * Get property definitions for Edge_hasTaxonomy
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


  /**
   * Get the VitalSigns type URI for Edge_hasTaxonomy
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasTaxonomy';
  }
}
