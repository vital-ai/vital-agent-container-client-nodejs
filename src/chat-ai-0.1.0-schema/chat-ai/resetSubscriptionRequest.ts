import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ResetSubscriptionRequest
 */
export class ResetSubscriptionRequest extends HaleyChatCommand {
  public haleyChatQuotaCreditAmount?: number;
  public haleyChatQuotaSubscriptionAmount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ResetSubscriptionRequest';
  }

  /**
   * Get property definitions for ResetSubscriptionRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditAmount',
        tsPropertyName: 'haleyChatQuotaCreditAmount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaSubscriptionAmount',
        tsPropertyName: 'haleyChatQuotaSubscriptionAmount',
        type: 'number',
        required: false
      }
    ];
  }


}
