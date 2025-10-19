import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyMindPlanCondition
 */
export class Edge_hasHaleyMindPlanCondition extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasHaleyMindPlanCondition';
  }

  /**
   * Get property definitions for Edge_hasHaleyMindPlanCondition
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyMindPlanCondition
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyMindPlanCondition';
  }
}
