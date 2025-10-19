import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HyperEdge_hasDialogPart
 */
export class HyperEdge_hasDialogPart extends VITAL_HyperEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasDialogPart';
  }

  /**
   * Get property definitions for HyperEdge_hasDialogPart
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasDialogPart
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasDialogPart';
  }
}
