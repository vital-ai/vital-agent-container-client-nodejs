import { Thing } from './thing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Organization
 */
export class Organization extends Thing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Organization';
  }

  /**
   * Get property definitions for Organization
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
