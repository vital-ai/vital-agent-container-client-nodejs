import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AlexaProfile
 */
export class AlexaProfile extends EndpointProfile {
  public alexaUserID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AlexaProfile';
  }

  /**
   * Get property definitions for AlexaProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAlexaUserID',
        tsPropertyName: 'alexaUserID',
        type: 'string',
        required: false
      }
    ];
  }


}
