import { SocialMediaAccount } from './socialMediaAccount';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#TwitterAccount
 */
export class TwitterAccount extends SocialMediaAccount {
  public oAuthTokenSecret?: string;
  public twitterOAuthToken?: string;
  public followersCount?: number;
  public screenName?: string;
  public twitterID?: number;
  public tweetsCount?: number;
  public socialDescription?: string;
  public followingCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#TwitterAccount';
  }

  /**
   * Get property definitions for TwitterAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasOAuthTokenSecret',
        tsPropertyName: 'oAuthTokenSecret',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterOAuthToken',
        tsPropertyName: 'twitterOAuthToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFollowersCount',
        tsPropertyName: 'followersCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasScreenName',
        tsPropertyName: 'screenName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTwitterID',
        tsPropertyName: 'twitterID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTweetsCount',
        tsPropertyName: 'tweetsCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialDescription',
        tsPropertyName: 'socialDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFollowingCount',
        tsPropertyName: 'followingCount',
        type: 'number',
        required: false
      }
    ];
  }


}
