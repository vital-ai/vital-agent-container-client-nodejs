import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Edge_hasNextElement
 */
export class Edge_hasNextElement extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Edge_hasNextElement';
  }

  /**
   * Get property definitions for Edge_hasNextElement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasNextElement
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital#Edge_hasNextElement';
  }
}
