import { SocialMediaAccount } from './socialMediaAccount';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#YouTubeAccount
 */
export class YouTubeAccount extends SocialMediaAccount {
  public expiresIn?: number;
  public commentCount?: number;
  public channelID?: string;
  public country?: string;
  public videoCount?: number;
  public subscriberCount?: number;
  public viewCount?: number;
  public socialDescription?: string;
  public publishedAt?: string | Date;
  public refreshToken?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#YouTubeAccount';
  }

  /**
   * Get property definitions for YouTubeAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasExpiresIn',
        tsPropertyName: 'expiresIn',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasCommentCount',
        tsPropertyName: 'commentCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasChannelID',
        tsPropertyName: 'channelID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasCountry',
        tsPropertyName: 'country',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasVideoCount',
        tsPropertyName: 'videoCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSubscriberCount',
        tsPropertyName: 'subscriberCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasViewCount',
        tsPropertyName: 'viewCount',
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPublishedAt',
        tsPropertyName: 'publishedAt',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRefreshToken',
        tsPropertyName: 'refreshToken',
        type: 'string',
        required: false
      }
    ];
  }


}
