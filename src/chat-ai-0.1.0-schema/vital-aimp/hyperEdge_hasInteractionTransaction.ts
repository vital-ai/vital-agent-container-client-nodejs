import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HyperEdge_hasInteractionTransaction
 */
export class HyperEdge_hasInteractionTransaction extends VITAL_HyperEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasInteractionTransaction';
  }

  /**
   * Get property definitions for HyperEdge_hasInteractionTransaction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasInteractionTransaction
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasInteractionTransaction';
  }
}
