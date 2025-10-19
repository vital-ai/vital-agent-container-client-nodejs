import { Endpoint } from './endpoint';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#TwitterEndpoint
 */
export class TwitterEndpoint extends Endpoint {
  public oAuthToken?: string;
  public oAuthSecret?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#TwitterEndpoint';
  }

  /**
   * Get property definitions for TwitterEndpoint
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOAuthToken',
        tsPropertyName: 'oAuthToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasOAuthSecret',
        tsPropertyName: 'oAuthSecret',
        type: 'string',
        required: false
      }
    ];
  }


}
