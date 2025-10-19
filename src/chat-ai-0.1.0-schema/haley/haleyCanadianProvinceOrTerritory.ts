import { HaleyCountryDivision } from './haleyCountryDivision';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCanadianProvinceOrTerritory
 */
export class HaleyCanadianProvinceOrTerritory extends HaleyCountryDivision {
  public postalAbbreviation?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyCanadianProvinceOrTerritory';
  }

  /**
   * Get property definitions for HaleyCanadianProvinceOrTerritory
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
