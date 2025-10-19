import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Edge_hasAgentInstanceDeploymentEndpoint
 */
export class Edge_hasAgentInstanceDeploymentEndpoint extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Edge_hasAgentInstanceDeploymentEndpoint';
  }

  /**
   * Get property definitions for Edge_hasAgentInstanceDeploymentEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAgentInstanceDeploymentEndpoint
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#Edge_hasAgentInstanceDeploymentEndpoint';
  }
}
