import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HyperEdge_hasInteractionPartChain
 */
export class HyperEdge_hasInteractionPartChain extends VITAL_HyperEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasInteractionPartChain';
  }

  /**
   * Get property definitions for HyperEdge_hasInteractionPartChain
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasInteractionPartChain
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasInteractionPartChain';
  }
}
