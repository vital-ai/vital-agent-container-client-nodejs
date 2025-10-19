import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasProofTreeNode
 */
export class Edge_hasProofTreeNode extends VITAL_PeerEdge {
  public proofTreeMembershipURI?: string;
  public proofTreeNodeIndex?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasProofTreeNode';
  }

  /**
   * Get property definitions for Edge_hasProofTreeNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI',
        tsPropertyName: 'proofTreeMembershipURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofTreeNodeIndex',
        tsPropertyName: 'proofTreeNodeIndex',
        type: 'number',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasProofTreeNode
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasProofTreeNode';
  }
}
