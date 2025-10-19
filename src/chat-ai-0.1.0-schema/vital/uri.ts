import { Identifier_Locator } from './identifier_Locator';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#URI
 */
export class URI extends Identifier_Locator {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#URI';
  }

  /**
   * Get property definitions for URI
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
