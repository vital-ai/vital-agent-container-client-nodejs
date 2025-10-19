import { HaleyRegion } from './haleyRegion';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyCity
 */
export class HaleyCity extends HaleyRegion {
  /** URI reference to one of: HaleyCanadianProvinceOrTerritory, HaleyUSStateOrTerritory */
  public divisionRegionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyCity';
  }

  /**
   * Get property definitions for HaleyCity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDivisionRegionURI',
        tsPropertyName: 'divisionRegionURI',
        type: 'http://vital.ai/ontology/haley#HaleyCanadianProvinceOrTerritory | http://vital.ai/ontology/haley#HaleyUSStateOrTerritory',
        required: false,
        format: 'uri'
      }
    ];
  }


}
