import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatCreditEvent
 */
export class HaleyChatCreditEvent extends VITAL_Node {
  public haleyChatStripeInvoiceId?: string;
  public haleyChatCreditEventUpdateDateTime?: string | Date;
  public haleyChatCreditEventTypeURI?: string;
  public haleyChatCreditURI?: string;
  public accountURI?: string;
  public haleyChatQuotaCreditAmount?: number;
  public haleyChatCustomerIdentifier?: string;
  public haleyChatCreditEventStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatCreditEvent';
  }

  /**
   * Get property definitions for HaleyChatCreditEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripeInvoiceId',
        tsPropertyName: 'haleyChatStripeInvoiceId',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCreditEventUpdateDateTime',
        tsPropertyName: 'haleyChatCreditEventUpdateDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCreditEventTypeURI',
        tsPropertyName: 'haleyChatCreditEventTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCreditURI',
        tsPropertyName: 'haleyChatCreditURI',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditAmount',
        tsPropertyName: 'haleyChatQuotaCreditAmount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCustomerIdentifier',
        tsPropertyName: 'haleyChatCustomerIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCreditEventStatusURI',
        tsPropertyName: 'haleyChatCreditEventStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
