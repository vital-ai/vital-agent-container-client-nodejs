import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo
 */
export class HaleyChatAccountInfo extends VITAL_Node {
  public haleyChatAccountUseCaseURIs?: string[];
  public haleyChatOnboardingInteractionURI?: string;
  public haleyChatAccountOwnerLoginURI?: string;
  public haleyChatAccountEntityName?: string;
  public haleyChatPaymentProcessorURI?: string;
  public haleyChatPrimaryLanguageURI?: string;
  public haleyChatPrimaryCountryURI?: string;
  public haleyChatAccountCategoryURI?: string;
  public haleyChatOnboardingStatusURI?: string;
  public haleyChatCustomerIdentifier?: string;
  public haleyChatPrimaryCurrencyURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAccountInfo';
  }

  /**
   * Get property definitions for HaleyChatAccountInfo
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatOnboardingInteractionURI',
        tsPropertyName: 'haleyChatOnboardingInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountOwnerLoginURI',
        tsPropertyName: 'haleyChatAccountOwnerLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountEntityName',
        tsPropertyName: 'haleyChatAccountEntityName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentProcessorURI',
        tsPropertyName: 'haleyChatPaymentProcessorURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryLanguageURI',
        tsPropertyName: 'haleyChatPrimaryLanguageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryCountryURI',
        tsPropertyName: 'haleyChatPrimaryCountryURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAccountCategoryURI',
        tsPropertyName: 'haleyChatAccountCategoryURI',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCustomerIdentifier',
        tsPropertyName: 'haleyChatCustomerIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPrimaryCurrencyURI',
        tsPropertyName: 'haleyChatPrimaryCurrencyURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
