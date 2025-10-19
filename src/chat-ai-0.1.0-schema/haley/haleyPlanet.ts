import { HaleyCelestialBody } from './haleyCelestialBody';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyPlanet
 */
export class HaleyPlanet extends HaleyCelestialBody {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyPlanet';
  }

  /**
   * Get property definitions for HaleyPlanet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
