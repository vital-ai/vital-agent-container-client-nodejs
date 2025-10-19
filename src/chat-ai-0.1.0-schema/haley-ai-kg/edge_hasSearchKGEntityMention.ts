import { Edge_hasKGEdge } from './edge_hasKGEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#Edge_hasSearchKGEntityMention
 */
export class Edge_hasSearchKGEntityMention extends Edge_hasKGEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#Edge_hasSearchKGEntityMention';
  }

  /**
   * Get property definitions for Edge_hasSearchKGEntityMention
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSearchKGEntityMention
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#Edge_hasSearchKGEntityMention';
  }
}
