import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Edge_hasTargetNode
 */
export class Edge_hasTargetNode extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Edge_hasTargetNode';
  }

  /**
   * Get property definitions for Edge_hasTargetNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasTargetNode
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-nlp#Edge_hasTargetNode';
  }
}
