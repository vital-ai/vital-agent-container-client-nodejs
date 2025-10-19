import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyMindRuleParameterBinding
 */
export class Edge_hasHaleyMindRuleParameterBinding extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasHaleyMindRuleParameterBinding';
  }

  /**
   * Get property definitions for Edge_hasHaleyMindRuleParameterBinding
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyMindRuleParameterBinding
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyMindRuleParameterBinding';
  }
}
