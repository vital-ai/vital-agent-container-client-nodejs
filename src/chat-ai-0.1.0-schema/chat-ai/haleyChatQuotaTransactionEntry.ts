import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransactionEntry
 */
export class HaleyChatQuotaTransactionEntry extends VITAL_Node {
  public haleyChatTaskURI?: string;
  public haleyChatQuotaTransactionEntryTypeURI?: string;
  public haleyChatQuotaTransactionURI?: string;
  public quotaSubscriptionCreditBalance?: number;
  public haleyChatMessageURI?: string;
  public chatTimestamp?: string | Date;
  public quotaSubscriptionBalance?: number;
  public quotaDebit?: number;
  public quotaSubscriptionDebit?: number;
  public quotaCreditDebit?: number;
  public quotaTransactionNonce?: string;
  public haleyChatInteractionURI?: string;
  declare public loginURI?: string;
  public haleyChatQuotaTransactionStatusURI?: string;
  public accountURI?: string;
  public haleyChatQuotaTransactionEntryStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransactionEntry';
  }

  /**
   * Get property definitions for HaleyChatQuotaTransactionEntry
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTaskURI',
        tsPropertyName: 'haleyChatTaskURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaTransactionEntryTypeURI',
        tsPropertyName: 'haleyChatQuotaTransactionEntryTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaTransactionURI',
        tsPropertyName: 'haleyChatQuotaTransactionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasQuotaSubscriptionCreditBalance',
        tsPropertyName: 'quotaSubscriptionCreditBalance',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatMessageURI',
        tsPropertyName: 'haleyChatMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatTimestamp',
        tsPropertyName: 'chatTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasQuotaSubscriptionBalance',
        tsPropertyName: 'quotaSubscriptionBalance',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasQuotaDebit',
        tsPropertyName: 'quotaDebit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasQuotaSubscriptionDebit',
        tsPropertyName: 'quotaSubscriptionDebit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasQuotaCreditDebit',
        tsPropertyName: 'quotaCreditDebit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasQuotaTransactionNonce',
        tsPropertyName: 'quotaTransactionNonce',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI',
        tsPropertyName: 'haleyChatInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaTransactionStatusURI',
        tsPropertyName: 'haleyChatQuotaTransactionStatusURI',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaTransactionEntryStatusURI',
        tsPropertyName: 'haleyChatQuotaTransactionEntryStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
