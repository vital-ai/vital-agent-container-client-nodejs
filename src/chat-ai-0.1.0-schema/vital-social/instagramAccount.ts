import { SocialMediaAccount } from './socialMediaAccount';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#InstagramAccount
 */
export class InstagramAccount extends SocialMediaAccount {
  public instagramID?: string;
  public mediaCount?: number;
  public socialUsername?: string;
  public website?: string;
  public followingCount?: number;
  public followersCount?: number;
  public bio?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#InstagramAccount';
  }

  /**
   * Get property definitions for InstagramAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasInstagramID',
        tsPropertyName: 'instagramID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasMediaCount',
        tsPropertyName: 'mediaCount',
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
        propertyURI: 'http://vital.ai/ontology/vital-social#hasWebsite',
        tsPropertyName: 'website',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFollowingCount',
        tsPropertyName: 'followingCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFollowersCount',
        tsPropertyName: 'followersCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasBio',
        tsPropertyName: 'bio',
        type: 'string',
        required: false
      }
    ];
  }


}
