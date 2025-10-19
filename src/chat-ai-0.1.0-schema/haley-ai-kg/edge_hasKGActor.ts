import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGActor
 */
export class Edge_hasKGActor extends Edge_hasKGEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGActor';
  }

  /**
   * Get property definitions for Edge_hasKGActor
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGActor
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGActor';
  }
}
