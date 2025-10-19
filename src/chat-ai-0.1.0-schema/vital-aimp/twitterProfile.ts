import { EndpointProfile } from './endpointProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TwitterProfile
 */
export class TwitterProfile extends EndpointProfile {
  public twitterID?: number;
  public screenName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#TwitterProfile';
  }

  /**
   * Get property definitions for TwitterProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterID',
        tsPropertyName: 'twitterID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasScreenName',
        tsPropertyName: 'screenName',
        type: 'string',
        required: false
      }
    ];
  }


}
