import { HaleyRegion } from './haleyRegion';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyUSCounty
 */
export class HaleyUSCounty extends HaleyRegion {
  public fIPSCode?: string;
  /** URI reference to one of: HaleyCanadianProvinceOrTerritory, HaleyUSStateOrTerritory */
  public divisionRegionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyUSCounty';
  }

  /**
   * Get property definitions for HaleyUSCounty
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasFIPSCode',
        tsPropertyName: 'fIPSCode',
        type: 'string',
        required: false
      },
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
