import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionInvoice
 */
export class HaleyChatSubscriptionInvoice extends VITAL_Node {
  public haleyChatSubscriptionPeriodStart?: string | Date;
  public haleyChatStripeInvoiceId?: string;
  public haleyChatSubscriptionPeriodEnd?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatSubscriptionInvoice';
  }

  /**
   * Get property definitions for HaleyChatSubscriptionInvoice
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionPeriodStart',
        tsPropertyName: 'haleyChatSubscriptionPeriodStart',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripeInvoiceId',
        tsPropertyName: 'haleyChatStripeInvoiceId',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatSubscriptionPeriodEnd',
        tsPropertyName: 'haleyChatSubscriptionPeriodEnd',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
