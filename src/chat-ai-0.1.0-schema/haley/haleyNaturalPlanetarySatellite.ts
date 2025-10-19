import { HaleyCelestialBody } from './haleyCelestialBody';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyNaturalPlanetarySatellite
 */
export class HaleyNaturalPlanetarySatellite extends HaleyCelestialBody {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyNaturalPlanetarySatellite';
  }

  /**
   * Get property definitions for HaleyNaturalPlanetarySatellite
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
