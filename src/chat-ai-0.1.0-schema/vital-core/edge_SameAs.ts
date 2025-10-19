import { VITAL_PeerEdge } from './vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_SameAs
 */
export class Edge_SameAs extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_SameAs';
  }

  /**
   * Get property definitions for Edge_SameAs
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_SameAs
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_SameAs';
  }
}
