import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasPersonaKGEntity
 */
export class Edge_hasPersonaKGEntity extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasPersonaKGEntity';
  }

  /**
   * Get property definitions for Edge_hasPersonaKGEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasPersonaKGEntity
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasPersonaKGEntity';
  }
}
