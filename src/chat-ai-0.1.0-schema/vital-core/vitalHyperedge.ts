import { VITAL_HyperEdge_Base, VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_HyperEdge
 */
export class VITAL_HyperEdge extends VITAL_HyperEdge_Base {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_HyperEdge';
  }

  /**
   * Get property definitions for VITAL_HyperEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for VITAL_HyperEdge
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#VITAL_HyperEdge';
  }
}
