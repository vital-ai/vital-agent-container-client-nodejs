import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SmsProfile
 */
export class SmsProfile extends EndpointProfile {
  public phoneNumber?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SmsProfile';
  }

  /**
   * Get property definitions for SmsProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPhoneNumber',
        tsPropertyName: 'phoneNumber',
        type: 'string',
        required: false
      }
    ];
  }


}
