import { SocialMediaApp } from './socialMediaApp';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#TwitterApp
 */
export class TwitterApp extends SocialMediaApp {
  public twitterID?: number;
  public consumerSecret?: string;
  public consumerKey?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#TwitterApp';
  }

  /**
   * Get property definitions for TwitterApp
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasConsumerSecret',
        tsPropertyName: 'consumerSecret',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasConsumerKey',
        tsPropertyName: 'consumerKey',
        type: 'string',
        required: false
      }
    ];
  }


}
