import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasChatMessageContent
 */
export class Edge_hasChatMessageContent extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasChatMessageContent';
  }

  /**
   * Get property definitions for Edge_hasChatMessageContent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasChatMessageContent
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasChatMessageContent';
  }
}
