import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerPath
 */
export class Edge_hasAnswerPath extends VITAL_PeerEdge {
  public proofTreeMembershipURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerPath';
  }

  /**
   * Get property definitions for Edge_hasAnswerPath
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
   * Get the VitalSigns type URI for Edge_hasAnswerPath
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerPath';
  }
}
