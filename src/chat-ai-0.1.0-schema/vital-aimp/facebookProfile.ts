import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FacebookProfile
 */
export class FacebookProfile extends EndpointProfile {
  public profilePic?: string;
  public gender?: string;
  public lastName?: string;
  public firstName?: string;
  public facebookID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FacebookProfile';
  }

  /**
   * Get property definitions for FacebookProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasProfilePic',
        tsPropertyName: 'profilePic',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGender',
        tsPropertyName: 'gender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastName',
        tsPropertyName: 'lastName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFirstName',
        tsPropertyName: 'firstName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFacebookID',
        tsPropertyName: 'facebookID',
        type: 'string',
        required: false
      }
    ];
  }


}
