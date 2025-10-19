import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#IosDeviceProfile
 */
export class IosDeviceProfile extends EndpointProfile {
  public uuid?: string;
  public token?: string;
  public notificationsEnabled?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#IosDeviceProfile';
  }

  /**
   * Get property definitions for IosDeviceProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUuid',
        tsPropertyName: 'uuid',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasToken',
        tsPropertyName: 'token',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isNotificationsEnabled',
        tsPropertyName: 'notificationsEnabled',
        type: 'boolean',
        required: false
      }
    ];
  }


}
