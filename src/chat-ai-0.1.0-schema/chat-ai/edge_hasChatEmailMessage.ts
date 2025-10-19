import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasChatEmailMessage
 */
export class Edge_hasChatEmailMessage extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasChatEmailMessage';
  }

  /**
   * Get property definitions for Edge_hasChatEmailMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasChatEmailMessage
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasChatEmailMessage';
  }
}
