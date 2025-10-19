import { BaseProfile } from './baseProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#UserProfile
 */
export class UserProfile extends BaseProfile {
  public haleyChatAccountUseCaseURIs?: string[];
  public haleyChatPrimaryLanguageURI?: string;
  public echoUserID?: string;
  public haleyChatPrimaryCountryURI?: string;
  public haleyChatOnboardingStatusURI?: string;
  public haleyChatPrimaryCurrencyURI?: string;
  public haleyChatOnboardingInteractionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#UserProfile';
  }

  /**
   * Get property definitions for UserProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountUseCaseURIs',
        tsPropertyName: 'haleyChatAccountUseCaseURIs',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryLanguageURI',
        tsPropertyName: 'haleyChatPrimaryLanguageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEchoUserID',
        tsPropertyName: 'echoUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryCountryURI',
        tsPropertyName: 'haleyChatPrimaryCountryURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatOnboardingStatusURI',
        tsPropertyName: 'haleyChatOnboardingStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryCurrencyURI',
        tsPropertyName: 'haleyChatPrimaryCurrencyURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatOnboardingInteractionURI',
        tsPropertyName: 'haleyChatOnboardingInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
