import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatQuota
 */
export class HaleyChatQuota extends VITAL_Node {
  public haleyChatQuotaCreditAmount?: number;
  public haleyChatQuotaDate?: string | Date;
  public haleyChatQuotaSubscriptionBalance?: number;
  public haleyChatQuotaAmount?: number;
  public haleyChatQuotaSubscriptionAmount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatQuota';
  }

  /**
   * Get property definitions for HaleyChatQuota
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaDate',
        tsPropertyName: 'haleyChatQuotaDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaSubscriptionBalance',
        tsPropertyName: 'haleyChatQuotaSubscriptionBalance',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaAmount',
        tsPropertyName: 'haleyChatQuotaAmount',
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
