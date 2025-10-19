import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment
 */
export class HaleyChatPendingPayment extends VITAL_Node {
  public haleyChatPaymentDescription?: string;
  public haleyChatPendingPaymentMessage?: string;
  public haleyChatStripeInvoiceId?: string;
  public haleyChatSubscriptionInvoiceURI?: string;
  public haleyChatSubscriptionURI?: string;
  public haleyChatPaymentDueDateTime?: string | Date;
  public haleyChatPendingPaymentTypeURI?: string;
  public haleyChatPaymentCurrencyURI?: string;
  public haleyChatPaymentAmount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatPendingPayment';
  }

  /**
   * Get property definitions for HaleyChatPendingPayment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDescription',
        tsPropertyName: 'haleyChatPaymentDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPendingPaymentMessage',
        tsPropertyName: 'haleyChatPendingPaymentMessage',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionInvoiceURI',
        tsPropertyName: 'haleyChatSubscriptionInvoiceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionURI',
        tsPropertyName: 'haleyChatSubscriptionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDueDateTime',
        tsPropertyName: 'haleyChatPaymentDueDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPendingPaymentTypeURI',
        tsPropertyName: 'haleyChatPendingPaymentTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentCurrencyURI',
        tsPropertyName: 'haleyChatPaymentCurrencyURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentAmount',
        tsPropertyName: 'haleyChatPaymentAmount',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
