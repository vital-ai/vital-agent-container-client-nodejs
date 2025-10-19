import { HaleyRegion } from './haleyRegion';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCountryDivision
 */
export class HaleyCountryDivision extends HaleyRegion {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyCountryDivision';
  }

  /**
   * Get property definitions for HaleyCountryDivision
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
