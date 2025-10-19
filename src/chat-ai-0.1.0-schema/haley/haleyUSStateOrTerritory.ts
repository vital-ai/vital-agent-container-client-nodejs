import { HaleyCountryDivision } from './haleyCountryDivision';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyUSStateOrTerritory
 */
export class HaleyUSStateOrTerritory extends HaleyCountryDivision {
  public postalAbbreviation?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyUSStateOrTerritory';
  }

  /**
   * Get property definitions for HaleyUSStateOrTerritory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPostalAbbreviation',
        tsPropertyName: 'postalAbbreviation',
        type: 'string',
        required: false
      }
    ];
  }


}
