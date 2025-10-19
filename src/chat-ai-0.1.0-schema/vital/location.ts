import { GeographicRegion } from './geographicRegion';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Location
 */
export class Location extends GeographicRegion {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Location';
  }

  /**
   * Get property definitions for Location
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
