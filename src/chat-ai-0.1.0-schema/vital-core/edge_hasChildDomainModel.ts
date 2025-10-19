import { VITAL_PeerEdge } from './vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasChildDomainModel
 */
export class Edge_hasChildDomainModel extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_hasChildDomainModel';
  }

  /**
   * Get property definitions for Edge_hasChildDomainModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasChildDomainModel
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasChildDomainModel';
  }
}
