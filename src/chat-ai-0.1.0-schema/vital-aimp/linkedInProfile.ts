import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#LinkedInProfile
 */
export class LinkedInProfile extends EndpointProfile {
  public linkedInProfileId?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#LinkedInProfile';
  }

  /**
   * Get property definitions for LinkedInProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLinkedInProfileId',
        tsPropertyName: 'linkedInProfileId',
        type: 'string',
        required: false
      }
    ];
  }


}
