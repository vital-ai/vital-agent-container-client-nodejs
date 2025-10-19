import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasRowInstanceDerivationRuleInvocation
 */
export class Edge_hasRowInstanceDerivationRuleInvocation extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasRowInstanceDerivationRuleInvocation';
  }

  /**
   * Get property definitions for Edge_hasRowInstanceDerivationRuleInvocation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasRowInstanceDerivationRuleInvocation
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasRowInstanceDerivationRuleInvocation';
  }
}
