import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasInstallKGAgent
 */
export class Edge_hasInstallKGAgent extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasInstallKGAgent';
  }

  /**
   * Get property definitions for Edge_hasInstallKGAgent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasInstallKGAgent
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasInstallKGAgent';
  }
}
