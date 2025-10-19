import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasInteractionKGFrame
 */
export class Edge_hasInteractionKGFrame extends Edge_hasKGEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasInteractionKGFrame';
  }

  /**
   * Get property definitions for Edge_hasInteractionKGFrame
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasInteractionKGFrame
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasInteractionKGFrame';
  }
}
