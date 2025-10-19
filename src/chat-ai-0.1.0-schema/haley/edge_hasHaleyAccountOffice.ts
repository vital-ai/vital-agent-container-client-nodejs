import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyAccountOffice
 */
export class Edge_hasHaleyAccountOffice extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasHaleyAccountOffice';
  }

  /**
   * Get property definitions for Edge_hasHaleyAccountOffice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyAccountOffice
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyAccountOffice';
  }
}
