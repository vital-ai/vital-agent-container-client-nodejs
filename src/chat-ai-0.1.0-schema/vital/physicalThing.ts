import { Thing } from './thing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#PhysicalThing
 */
export class PhysicalThing extends Thing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#PhysicalThing';
  }

  /**
   * Get property definitions for PhysicalThing
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
