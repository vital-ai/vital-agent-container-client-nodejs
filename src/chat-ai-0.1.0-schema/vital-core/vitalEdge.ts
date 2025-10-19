import { VITAL_Edge_Base, VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_Edge
 */
export class VITAL_Edge extends VITAL_Edge_Base {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_Edge';
  }

  /**
   * Get property definitions for VITAL_Edge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for VITAL_Edge
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#VITAL_Edge';
  }
}
