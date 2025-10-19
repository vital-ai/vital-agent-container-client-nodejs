import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccountOfficeLocation
 */
export class HaleyAccountOfficeLocation extends VITAL_Node {
  public officeLocationAddressCountry?: string;
  public officeLocationAddressCounty?: string;
  public officeLocationAddressLine2?: string;
  public officeLocationAddressCity?: string;
  public officeLocationAddressState?: string;
  public officeLocationAddressPostalCode?: string;
  public officeLocationAddressLine1?: string;
  public officeLocationAddressProvince?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccountOfficeLocation';
  }

  /**
   * Get property definitions for HaleyAccountOfficeLocation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressCountry',
        tsPropertyName: 'officeLocationAddressCountry',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressCounty',
        tsPropertyName: 'officeLocationAddressCounty',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressLine2',
        tsPropertyName: 'officeLocationAddressLine2',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressCity',
        tsPropertyName: 'officeLocationAddressCity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressState',
        tsPropertyName: 'officeLocationAddressState',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressPostalCode',
        tsPropertyName: 'officeLocationAddressPostalCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressLine1',
        tsPropertyName: 'officeLocationAddressLine1',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasOfficeLocationAddressProvince',
        tsPropertyName: 'officeLocationAddressProvince',
        type: 'string',
        required: false
      }
    ];
  }


}
