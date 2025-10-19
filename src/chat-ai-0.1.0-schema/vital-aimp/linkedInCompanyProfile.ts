import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#LinkedInCompanyProfile
 */
export class LinkedInCompanyProfile extends VITAL_Node {
  public linkedInCompanyURL?: string;
  public linkedInUniversalName?: string;
  public linkedInIndustry?: string;
  public linkedInCompanyLogoImageURL?: string;
  public linkedInJSON?: string;
  public linkedInNumberOfEmployees?: number;
  public linkedInCompanyName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#LinkedInCompanyProfile';
  }

  /**
   * Get property definitions for LinkedInCompanyProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInCompanyURL',
        tsPropertyName: 'linkedInCompanyURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInUniversalName',
        tsPropertyName: 'linkedInUniversalName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInIndustry',
        tsPropertyName: 'linkedInIndustry',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInCompanyLogoImageURL',
        tsPropertyName: 'linkedInCompanyLogoImageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInJSON',
        tsPropertyName: 'linkedInJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInNumberOfEmployees',
        tsPropertyName: 'linkedInNumberOfEmployees',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInCompanyName',
        tsPropertyName: 'linkedInCompanyName',
        type: 'string',
        required: false
      }
    ];
  }


}
