import { Thing } from './thing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Currency
 */
export class Currency extends Thing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Currency';
  }

  /**
   * Get property definitions for Currency
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
