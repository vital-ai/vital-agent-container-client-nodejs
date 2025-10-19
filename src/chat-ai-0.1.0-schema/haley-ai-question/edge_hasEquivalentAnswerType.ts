import { Edge_SameAs } from '../vital-core/edge_SameAs';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasEquivalentAnswerType
 */
export class Edge_hasEquivalentAnswerType extends Edge_SameAs {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasEquivalentAnswerType';
  }

  /**
   * Get property definitions for Edge_hasEquivalentAnswerType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasEquivalentAnswerType
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasEquivalentAnswerType';
  }
}
