import { HaleyRegion } from './haleyRegion';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCelestialBody
 */
export class HaleyCelestialBody extends HaleyRegion {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyCelestialBody';
  }

  /**
   * Get property definitions for HaleyCelestialBody
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
