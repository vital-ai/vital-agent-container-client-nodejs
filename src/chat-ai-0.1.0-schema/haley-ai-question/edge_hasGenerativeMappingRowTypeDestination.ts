import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasGenerativeMappingRowTypeDestination
 */
export class Edge_hasGenerativeMappingRowTypeDestination extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasGenerativeMappingRowTypeDestination';
  }

  /**
   * Get property definitions for Edge_hasGenerativeMappingRowTypeDestination
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasGenerativeMappingRowTypeDestination
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasGenerativeMappingRowTypeDestination';
  }
}
