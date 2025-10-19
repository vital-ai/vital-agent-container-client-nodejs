import { HaleyRegion } from './haleyRegion';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyPlace
 */
export class HaleyPlace extends HaleyRegion {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyPlace';
  }

  /**
   * Get property definitions for HaleyPlace
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
