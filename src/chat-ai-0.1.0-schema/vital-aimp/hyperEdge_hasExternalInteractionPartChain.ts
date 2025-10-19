import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HyperEdge_hasExternalInteractionPartChain
 */
export class HyperEdge_hasExternalInteractionPartChain extends VITAL_HyperEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasExternalInteractionPartChain';
  }

  /**
   * Get property definitions for HyperEdge_hasExternalInteractionPartChain
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasExternalInteractionPartChain
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasExternalInteractionPartChain';
  }
}
