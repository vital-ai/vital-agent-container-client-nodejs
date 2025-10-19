import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HyperEdge_hasHaleyMindRuleGraphMembership
 */
export class HyperEdge_hasHaleyMindRuleGraphMembership extends VITAL_HyperEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HyperEdge_hasHaleyMindRuleGraphMembership';
  }

  /**
   * Get property definitions for HyperEdge_hasHaleyMindRuleGraphMembership
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasHaleyMindRuleGraphMembership
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#HyperEdge_hasHaleyMindRuleGraphMembership';
  }
}
