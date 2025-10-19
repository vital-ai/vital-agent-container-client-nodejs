import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent
 */
export class HaleyChatStripePaymentIntent extends VITAL_Node {
  public haleyChatStripePaymentIntentId?: string;
  public haleyChatStripeInvoiceId?: string;
  public haleyChatStripeClientSecret?: string;
  public haleyChatStripeStatusTypeURI?: string;
  public haleyChatStripePaymentIntentStatusURI?: string;
  public haleyChatStripePaymentAmount?: number;
  public currentSubscriptionLevelURI?: string;
  public haleyChatPaymentMethodIdentifier?: string;
  public stripePaymentMethodIdentifier?: string;
  declare public loginURI?: string;
  public accountURI?: string;
  public haleyChatStripeToken?: string;
  public haleyChatStripeMessage?: string;
  public haleyChatCustomerIdentifier?: string;
  public desiredSubscriptionLevelURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatStripePaymentIntent';
  }

  /**
   * Get property definitions for HaleyChatStripePaymentIntent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripePaymentIntentId',
        tsPropertyName: 'haleyChatStripePaymentIntentId',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripeInvoiceId',
        tsPropertyName: 'haleyChatStripeInvoiceId',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripeClientSecret',
        tsPropertyName: 'haleyChatStripeClientSecret',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripeStatusTypeURI',
        tsPropertyName: 'haleyChatStripeStatusTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripePaymentIntentStatusURI',
        tsPropertyName: 'haleyChatStripePaymentIntentStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripePaymentAmount',
        tsPropertyName: 'haleyChatStripePaymentAmount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasCurrentSubscriptionLevelURI',
        tsPropertyName: 'currentSubscriptionLevelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodIdentifier',
        tsPropertyName: 'haleyChatPaymentMethodIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasStripePaymentMethodIdentifier',
        tsPropertyName: 'stripePaymentMethodIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripeToken',
        tsPropertyName: 'haleyChatStripeToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripeMessage',
        tsPropertyName: 'haleyChatStripeMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCustomerIdentifier',
        tsPropertyName: 'haleyChatCustomerIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasDesiredSubscriptionLevelURI',
        tsPropertyName: 'desiredSubscriptionLevelURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
