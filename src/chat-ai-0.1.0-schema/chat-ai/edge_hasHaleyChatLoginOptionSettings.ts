import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatLoginOptionSettings
 */
export class Edge_hasHaleyChatLoginOptionSettings extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatLoginOptionSettings';
  }

  /**
   * Get property definitions for Edge_hasHaleyChatLoginOptionSettings
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyChatLoginOptionSettings
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatLoginOptionSettings';
  }
}
