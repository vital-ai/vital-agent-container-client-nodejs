import { PhysicalThing } from './physicalThing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Person
 */
export class Person extends PhysicalThing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Person';
  }

  /**
   * Get property definitions for Person
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
