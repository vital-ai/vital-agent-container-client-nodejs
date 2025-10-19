import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGCriterion
 */
export class Edge_hasKGCriterion extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGCriterion';
  }

  /**
   * Get property definitions for Edge_hasKGCriterion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGCriterion
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGCriterion';
  }
}
