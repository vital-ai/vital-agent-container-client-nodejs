import { Identifier_Locator } from './identifier_Locator';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#PhoneNumber
 */
export class PhoneNumber extends Identifier_Locator {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#PhoneNumber';
  }

  /**
   * Get property definitions for PhoneNumber
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
