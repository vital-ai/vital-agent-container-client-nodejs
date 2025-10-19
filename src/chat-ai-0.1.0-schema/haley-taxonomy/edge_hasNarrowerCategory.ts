import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-taxonomy#Edge_hasNarrowerCategory
 */
export class Edge_hasNarrowerCategory extends VITAL_PeerEdge {
  public description?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-taxonomy#Edge_hasNarrowerCategory';
  }

  /**
   * Get property definitions for Edge_hasNarrowerCategory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-taxonomy#hasDescription',
        tsPropertyName: 'description',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasNarrowerCategory
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-taxonomy#Edge_hasNarrowerCategory';
  }
}
