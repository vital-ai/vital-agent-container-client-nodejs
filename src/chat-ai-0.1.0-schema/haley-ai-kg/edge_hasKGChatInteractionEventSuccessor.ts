import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasKGChatInteractionEventSuccessor
 */
export class Edge_hasKGChatInteractionEventSuccessor extends Edge_hasKGEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGChatInteractionEventSuccessor';
  }

  /**
   * Get property definitions for Edge_hasKGChatInteractionEventSuccessor
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasKGChatInteractionEventSuccessor
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasKGChatInteractionEventSuccessor';
  }
}
