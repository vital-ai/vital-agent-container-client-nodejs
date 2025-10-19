import { Identifier_Locator } from './identifier_Locator';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#URL
 */
export class URL extends Identifier_Locator {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#URL';
  }

  /**
   * Get property definitions for URL
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
