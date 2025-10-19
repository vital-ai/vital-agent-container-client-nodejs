import { Thing } from './thing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Duration
 */
export class Duration extends Thing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Duration';
  }

  /**
   * Get property definitions for Duration
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
