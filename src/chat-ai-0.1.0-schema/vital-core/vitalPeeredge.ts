import { VITAL_Edge } from './vitalEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_PeerEdge
 */
export class VITAL_PeerEdge extends VITAL_Edge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_PeerEdge';
  }

  /**
   * Get property definitions for VITAL_PeerEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for VITAL_PeerEdge
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#VITAL_PeerEdge';
  }
}
