import { HaleyRegion } from './haleyRegion';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyUSPostalRegion
 */
export class HaleyUSPostalRegion extends HaleyRegion {
  /** URI reference to one of: HaleyCanadianProvinceOrTerritory, HaleyUSStateOrTerritory */
  public divisionRegionURI?: string;
  public fIPSCode?: string;
  public postalCode?: string;
  public countyRegionURI?: string;
  public postalCodePlusFour?: string;
  public timeZoneIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyUSPostalRegion';
  }

  /**
   * Get property definitions for HaleyUSPostalRegion
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
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasFIPSCode',
        tsPropertyName: 'fIPSCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPostalCode',
        tsPropertyName: 'postalCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCountyRegionURI',
        tsPropertyName: 'countyRegionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPostalCodePlusFour',
        tsPropertyName: 'postalCodePlusFour',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasTimeZoneIdentifier',
        tsPropertyName: 'timeZoneIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
