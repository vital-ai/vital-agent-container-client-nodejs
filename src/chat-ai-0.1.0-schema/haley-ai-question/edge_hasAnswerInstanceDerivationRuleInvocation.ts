import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerInstanceDerivationRuleInvocation
 */
export class Edge_hasAnswerInstanceDerivationRuleInvocation extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerInstanceDerivationRuleInvocation';
  }

  /**
   * Get property definitions for Edge_hasAnswerInstanceDerivationRuleInvocation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAnswerInstanceDerivationRuleInvocation
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerInstanceDerivationRuleInvocation';
  }
}
