import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerOptionDependency
 */
export class Edge_hasAnswerOptionDependency extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerOptionDependency';
  }

  /**
   * Get property definitions for Edge_hasAnswerOptionDependency
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAnswerOptionDependency
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerOptionDependency';
  }
}
