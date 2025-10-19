import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasAgentPersonaInstance
 */
export class Edge_hasAgentPersonaInstance extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasAgentPersonaInstance';
  }

  /**
   * Get property definitions for Edge_hasAgentPersonaInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAgentPersonaInstance
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasAgentPersonaInstance';
  }
}
