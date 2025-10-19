import { VITAL_PeerEdge } from './vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasParentDomainModel
 */
export class Edge_hasParentDomainModel extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_hasParentDomainModel';
  }

  /**
   * Get property definitions for Edge_hasParentDomainModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasParentDomainModel
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasParentDomainModel';
  }
}
