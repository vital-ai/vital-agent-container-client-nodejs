import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent
 */
export class HaleyChatSubscriptionEvent extends VITAL_Node {
  public haleyChatSubscriptionEventUpdateDateTime?: string | Date;
  public haleyChatSubscriptionEventStatusURI?: string;
  public haleyChatStripeInvoiceId?: string;
  public haleyChatSubscriptionEventTypeURI?: string;
  public haleyChatSubscriptionPeriodEnd?: string | Date;
  public haleyChatSubscriptionPeriodStart?: string | Date;
  public haleyChatSubscriptionIdentifier?: string;
  public haleyChatSubscriptionCreditAmount?: number;
  public accountURI?: string;
  public haleyChatCustomerIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionEvent';
  }

  /**
   * Get property definitions for HaleyChatSubscriptionEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEventUpdateDateTime',
        tsPropertyName: 'haleyChatSubscriptionEventUpdateDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEventStatusURI',
        tsPropertyName: 'haleyChatSubscriptionEventStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripeInvoiceId',
        tsPropertyName: 'haleyChatStripeInvoiceId',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionEventTypeURI',
        tsPropertyName: 'haleyChatSubscriptionEventTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionPeriodEnd',
        tsPropertyName: 'haleyChatSubscriptionPeriodEnd',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionPeriodStart',
        tsPropertyName: 'haleyChatSubscriptionPeriodStart',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionIdentifier',
        tsPropertyName: 'haleyChatSubscriptionIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionCreditAmount',
        tsPropertyName: 'haleyChatSubscriptionCreditAmount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCustomerIdentifier',
        tsPropertyName: 'haleyChatCustomerIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
