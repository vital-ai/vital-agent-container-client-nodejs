import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ConfirmPaymentAdminRequest
 */
export class ConfirmPaymentAdminRequest extends HaleyChatAdminCommand {
  public haleyChatStripeClientSecret?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ConfirmPaymentAdminRequest';
  }

  /**
   * Get property definitions for ConfirmPaymentAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStripeClientSecret',
        tsPropertyName: 'haleyChatStripeClientSecret',
        type: 'string',
        required: false
      }
    ];
  }


}
