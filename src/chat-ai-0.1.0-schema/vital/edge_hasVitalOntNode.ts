import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Edge_hasVitalOntNode
 */
export class Edge_hasVitalOntNode extends VITAL_PeerEdge {
  public vitalOntEdgeURI?: string;
  public vitalOntEdgeType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Edge_hasVitalOntNode';
  }

  /**
   * Get property definitions for Edge_hasVitalOntNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntEdgeURI',
        tsPropertyName: 'vitalOntEdgeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntEdgeType',
        tsPropertyName: 'vitalOntEdgeType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasVitalOntNode
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital#Edge_hasVitalOntNode';
  }
}
