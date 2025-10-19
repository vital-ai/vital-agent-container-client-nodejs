import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_Event
 */
export class VITAL_Event extends VITAL_Node {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_Event';
  }

  /**
   * Get property definitions for VITAL_Event
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
