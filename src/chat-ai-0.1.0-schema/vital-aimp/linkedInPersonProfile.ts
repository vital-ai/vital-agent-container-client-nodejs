import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#LinkedInPersonProfile
 */
export class LinkedInPersonProfile extends VITAL_Node {
  public linkedInCompanyURL?: string;
  public linkedInLastName?: string;
  public linkedInJSON?: string;
  public linkedInFirstName?: string;
  public linkedInCompanyName?: string;
  public linkedInOccupation?: string;
  public linkedInEmailAddress?: string;
  public linkedInProfilePageURL?: string;
  public linkedinProfileImageURL?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#LinkedInPersonProfile';
  }

  /**
   * Get property definitions for LinkedInPersonProfile
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInLastName',
        tsPropertyName: 'linkedInLastName',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInFirstName',
        tsPropertyName: 'linkedInFirstName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInCompanyName',
        tsPropertyName: 'linkedInCompanyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInOccupation',
        tsPropertyName: 'linkedInOccupation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInEmailAddress',
        tsPropertyName: 'linkedInEmailAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInProfilePageURL',
        tsPropertyName: 'linkedInProfilePageURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedinProfileImageURL',
        tsPropertyName: 'linkedinProfileImageURL',
        type: 'string',
        required: false
      }
    ];
  }


}
