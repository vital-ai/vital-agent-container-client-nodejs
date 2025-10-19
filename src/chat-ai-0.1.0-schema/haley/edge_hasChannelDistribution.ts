import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasChannelDistribution
 */
export class Edge_hasChannelDistribution extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasChannelDistribution';
  }

  /**
   * Get property definitions for Edge_hasChannelDistribution
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasChannelDistribution
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasChannelDistribution';
  }
}
