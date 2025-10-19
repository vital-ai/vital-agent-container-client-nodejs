import { Thing } from './thing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Number
 */
export class Number extends Thing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Number';
  }

  /**
   * Get property definitions for Number
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
