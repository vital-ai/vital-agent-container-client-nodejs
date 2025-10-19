import { VITAL_GraphContainerObject_Base, VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject
 */
export class VITAL_GraphContainerObject extends VITAL_GraphContainerObject_Base {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_GraphContainerObject';
  }

  /**
   * Get property definitions for VITAL_GraphContainerObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
