import { VITAL_PeerEdge } from './vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasDbConfig
 */
export class Edge_hasDbConfig extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_hasDbConfig';
  }

  /**
   * Get property definitions for Edge_hasDbConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasDbConfig
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasDbConfig';
  }
}
