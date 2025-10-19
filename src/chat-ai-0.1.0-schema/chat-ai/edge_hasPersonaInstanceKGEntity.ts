import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasPersonaInstanceKGEntity
 */
export class Edge_hasPersonaInstanceKGEntity extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasPersonaInstanceKGEntity';
  }

  /**
   * Get property definitions for Edge_hasPersonaInstanceKGEntity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasPersonaInstanceKGEntity
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasPersonaInstanceKGEntity';
  }
}
