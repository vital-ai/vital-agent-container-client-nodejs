import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasInteractionFlowStep
 */
export class Edge_hasInteractionFlowStep extends VITAL_PeerEdge {
  public haleyInteractionFlowStepRoleTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasInteractionFlowStep';
  }

  /**
   * Get property definitions for Edge_hasInteractionFlowStep
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepRoleTypeURI',
        tsPropertyName: 'haleyInteractionFlowStepRoleTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasInteractionFlowStep
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasInteractionFlowStep';
  }
}
