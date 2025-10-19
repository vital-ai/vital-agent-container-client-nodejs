import { HaleyChatPayment } from './haleyChatPayment';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatDirectPayment
 */
export class HaleyChatDirectPayment extends HaleyChatPayment {
  public haleyChatDirectPaymentAppliedDateTime?: string | Date;
  public haleyChatDirectPaymentAppliedCreditURI?: string;
  public haleyChatDirectPaymentAppliedSubscriptionURI?: string;
  public haleyChatDirectPaymentAppliedStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatDirectPayment';
  }

  /**
   * Get property definitions for HaleyChatDirectPayment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedDateTime',
        tsPropertyName: 'haleyChatDirectPaymentAppliedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedCreditURI',
        tsPropertyName: 'haleyChatDirectPaymentAppliedCreditURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedSubscriptionURI',
        tsPropertyName: 'haleyChatDirectPaymentAppliedSubscriptionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatDirectPaymentAppliedStatusURI',
        tsPropertyName: 'haleyChatDirectPaymentAppliedStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
