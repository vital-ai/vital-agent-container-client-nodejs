import { VITAL_HyperNode_Base, VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_HyperNode
 */
export class VITAL_HyperNode extends VITAL_HyperNode_Base {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_HyperNode';
  }

  /**
   * Get property definitions for VITAL_HyperNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
