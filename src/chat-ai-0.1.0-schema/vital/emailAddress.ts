import { Identifier_Locator } from './identifier_Locator';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#EmailAddress
 */
export class EmailAddress extends Identifier_Locator {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#EmailAddress';
  }

  /**
   * Get property definitions for EmailAddress
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
