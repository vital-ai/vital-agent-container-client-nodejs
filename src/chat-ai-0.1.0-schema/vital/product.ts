import { PhysicalThing } from './physicalThing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Product
 */
export class Product extends PhysicalThing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Product';
  }

  /**
   * Get property definitions for Product
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
