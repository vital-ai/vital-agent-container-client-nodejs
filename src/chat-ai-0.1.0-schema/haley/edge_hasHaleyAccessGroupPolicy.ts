import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyAccessGroupPolicy
 */
export class Edge_hasHaleyAccessGroupPolicy extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessGroupPolicy';
  }

  /**
   * Get property definitions for Edge_hasHaleyAccessGroupPolicy
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyAccessGroupPolicy
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessGroupPolicy';
  }
}
