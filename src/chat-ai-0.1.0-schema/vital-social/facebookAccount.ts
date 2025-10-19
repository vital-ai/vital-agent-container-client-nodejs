import { SocialMediaAccount } from './socialMediaAccount';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#FacebookAccount
 */
export class FacebookAccount extends SocialMediaAccount {
  public facebookCategory?: string;
  public pageFansCountry?: string;
  public socialUsername?: string;
  public facebookID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#FacebookAccount';
  }

  /**
   * Get property definitions for FacebookAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFacebookCategory',
        tsPropertyName: 'facebookCategory',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasPageFansCountry',
        tsPropertyName: 'pageFansCountry',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasSocialUsername',
        tsPropertyName: 'socialUsername',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-social#hasFacebookID',
        tsPropertyName: 'facebookID',
        type: 'string',
        required: false
      }
    ];
  }


}
