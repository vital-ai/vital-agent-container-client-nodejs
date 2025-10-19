import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasAgentKGAgent
 */
export class Edge_hasAgentKGAgent extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasAgentKGAgent';
  }

  /**
   * Get property definitions for Edge_hasAgentKGAgent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAgentKGAgent
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasAgentKGAgent';
  }
}
