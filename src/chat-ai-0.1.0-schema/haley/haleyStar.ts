import { HaleyCelestialBody } from './haleyCelestialBody';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyStar
 */
export class HaleyStar extends HaleyCelestialBody {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyStar';
  }

  /**
   * Get property definitions for HaleyStar
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
