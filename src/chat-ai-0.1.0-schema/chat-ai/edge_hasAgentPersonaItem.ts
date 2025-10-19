import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasAgentPersonaItem
 */
export class Edge_hasAgentPersonaItem extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasAgentPersonaItem';
  }

  /**
   * Get property definitions for Edge_hasAgentPersonaItem
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAgentPersonaItem
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasAgentPersonaItem';
  }
}
