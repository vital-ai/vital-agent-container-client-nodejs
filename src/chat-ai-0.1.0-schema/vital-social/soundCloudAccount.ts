import { SocialMediaAccount } from './socialMediaAccount';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#SoundCloudAccount
 */
export class SoundCloudAccount extends SocialMediaAccount {
  public permalink?: string;
  public expiresIn?: number;
  public favoriteCount?: number;
  public playlistsCount?: number;
  public socialUsername?: string;
  public soundCloudID?: number;
  public tracksCount?: number;
  public followingCount?: number;
  public refreshToken?: string;
  public permalinkURL?: string;
  public websiteTitle?: string;
  public discogsName?: string;
  public website?: string;
  public myspaceName?: string;
  public followersCount?: number;
  public city?: string;
  public country?: string;
  public socialDescription?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#SoundCloudAccount';
  }

  /**
   * Get property definitions for SoundCloudAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPermalink',
        tsPropertyName: 'permalink',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasExpiresIn',
        tsPropertyName: 'expiresIn',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFavoriteCount',
        tsPropertyName: 'favoriteCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPlaylistsCount',
        tsPropertyName: 'playlistsCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialUsername',
        tsPropertyName: 'socialUsername',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSoundCloudID',
        tsPropertyName: 'soundCloudID',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasTracksCount',
        tsPropertyName: 'tracksCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFollowingCount',
        tsPropertyName: 'followingCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasRefreshToken',
        tsPropertyName: 'refreshToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPermalinkURL',
        tsPropertyName: 'permalinkURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasWebsiteTitle',
        tsPropertyName: 'websiteTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasDiscogsName',
        tsPropertyName: 'discogsName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasWebsite',
        tsPropertyName: 'website',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasMyspaceName',
        tsPropertyName: 'myspaceName',
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasCity',
        tsPropertyName: 'city',
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialDescription',
        tsPropertyName: 'socialDescription',
        type: 'string',
        required: false
      }
    ];
  }


}
