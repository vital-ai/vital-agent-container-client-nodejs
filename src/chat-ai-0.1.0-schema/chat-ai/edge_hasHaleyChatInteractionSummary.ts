import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatInteractionSummary
 */
export class Edge_hasHaleyChatInteractionSummary extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatInteractionSummary';
  }

  /**
   * Get property definitions for Edge_hasHaleyChatInteractionSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyChatInteractionSummary
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatInteractionSummary';
  }
}
