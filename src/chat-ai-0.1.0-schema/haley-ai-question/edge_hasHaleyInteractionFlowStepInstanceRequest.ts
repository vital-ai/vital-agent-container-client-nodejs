import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyInteractionFlowStepInstanceRequest
 */
export class Edge_hasHaleyInteractionFlowStepInstanceRequest extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyInteractionFlowStepInstanceRequest';
  }

  /**
   * Get property definitions for Edge_hasHaleyInteractionFlowStepInstanceRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyInteractionFlowStepInstanceRequest
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyInteractionFlowStepInstanceRequest';
  }
}
