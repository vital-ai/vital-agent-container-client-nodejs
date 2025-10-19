import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerPathInstance
 */
export class Edge_hasAnswerPathInstance extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerPathInstance';
  }

  /**
   * Get property definitions for Edge_hasAnswerPathInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAnswerPathInstance
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasAnswerPathInstance';
  }
}
