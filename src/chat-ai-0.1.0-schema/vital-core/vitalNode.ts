import { VITAL_Node_Base, VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_Node
 */
export class VITAL_Node extends VITAL_Node_Base {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_Node';
  }

  /**
   * Get property definitions for VITAL_Node
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
