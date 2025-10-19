import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption
 */
export class HaleyChatSubscriptionOption extends VITAL_Node {
  public haleyChatSubscriptionOptionAvailable?: boolean;
  public haleyChatContentObjectOrder?: number;
  public subscriptionPriceIdentifier?: string;
  public haleyChatRequiredPromotionURI?: string;
  public haleyChatContentTitle?: string;
  public haleyChatContentObjectIcon?: string;
  public haleyChatSubscriptionLevelURI?: string;
  public subscriptionProductIdentifier?: string;
  public haleyChatContentJSON?: string;
  public haleyChatContentObjectTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionOption';
  }

  /**
   * Get property definitions for HaleyChatSubscriptionOption
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyChatSubscriptionOptionAvailable',
        tsPropertyName: 'haleyChatSubscriptionOptionAvailable',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectOrder',
        tsPropertyName: 'haleyChatContentObjectOrder',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasSubscriptionPriceIdentifier',
        tsPropertyName: 'subscriptionPriceIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatRequiredPromotionURI',
        tsPropertyName: 'haleyChatRequiredPromotionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatContentTitle',
        tsPropertyName: 'haleyChatContentTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectIcon',
        tsPropertyName: 'haleyChatContentObjectIcon',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionLevelURI',
        tsPropertyName: 'haleyChatSubscriptionLevelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasSubscriptionProductIdentifier',
        tsPropertyName: 'subscriptionProductIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatContentJSON',
        tsPropertyName: 'haleyChatContentJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatContentObjectTypeURI',
        tsPropertyName: 'haleyChatContentObjectTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
