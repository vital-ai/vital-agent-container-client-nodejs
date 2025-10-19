import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasProofJustificationReason
 */
export class Edge_hasProofJustificationReason extends VITAL_PeerEdge {
  public proofTreeMembershipURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasProofJustificationReason';
  }

  /**
   * Get property definitions for Edge_hasProofJustificationReason
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
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasProofJustificationReason
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasProofJustificationReason';
  }
}
