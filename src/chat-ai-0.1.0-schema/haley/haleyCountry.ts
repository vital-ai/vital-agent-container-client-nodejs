import { HaleyRegion } from './haleyRegion';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCountry
 */
export class HaleyCountry extends HaleyRegion {
  public haleyCountryISOCode?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyCountry';
  }

  /**
   * Get property definitions for HaleyCountry
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyCountryISOCode',
        tsPropertyName: 'haleyCountryISOCode',
        type: 'string',
        required: false
      }
    ];
  }


}
