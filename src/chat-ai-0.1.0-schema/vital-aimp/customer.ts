import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Customer
 */
export class Customer extends AIMPThing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Customer';
  }

  /**
   * Get property definitions for Customer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
