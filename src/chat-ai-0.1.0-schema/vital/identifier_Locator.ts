import { Thing } from './thing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Identifier_Locator
 */
export class Identifier_Locator extends Thing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Identifier_Locator';
  }

  /**
   * Get property definitions for Identifier_Locator
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
