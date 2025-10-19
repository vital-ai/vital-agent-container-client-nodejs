import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HyperEdge_hasMessagePayload
 */
export class HyperEdge_hasMessagePayload extends VITAL_HyperEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasMessagePayload';
  }

  /**
   * Get property definitions for HyperEdge_hasMessagePayload
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasMessagePayload
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasMessagePayload';
  }
}
