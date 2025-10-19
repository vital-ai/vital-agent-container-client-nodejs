import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction
 */
export class HaleyChatQuotaTransaction extends VITAL_Node {
  public haleyChatStatusMessage?: string;
  public haleyChatInteractionModelTypeURI?: string;
  public outputTokenCount?: number;
  public haleyChatTaskURI?: string;
  public haleyChatMessageURI?: string;
  public inputTokenCount?: number;
  public chatTimestamp?: string | Date;
  public estimatedModelCost?: number;
  public quotaDebit?: number;
  public haleyChatInteractionModelProviderURI?: string;
  public haleyChatQuotaTransactionTypeURI?: string;
  public quotaSubscriptionDebit?: number;
  public quotaCreditDebit?: number;
  public quotaTransactionNonce?: string;
  public haleyChatInteractionURI?: string;
  declare public loginURI?: string;
  public haleyChatQuotaTransactionStatusURI?: string;
  public accountURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatQuotaTransaction';
  }

  /**
   * Get property definitions for HaleyChatQuotaTransaction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStatusMessage',
        tsPropertyName: 'haleyChatStatusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI',
        tsPropertyName: 'haleyChatInteractionModelTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasOutputTokenCount',
        tsPropertyName: 'outputTokenCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTaskURI',
        tsPropertyName: 'haleyChatTaskURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatMessageURI',
        tsPropertyName: 'haleyChatMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasInputTokenCount',
        tsPropertyName: 'inputTokenCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatTimestamp',
        tsPropertyName: 'chatTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasEstimatedModelCost',
        tsPropertyName: 'estimatedModelCost',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasQuotaDebit',
        tsPropertyName: 'quotaDebit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelProviderURI',
        tsPropertyName: 'haleyChatInteractionModelProviderURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaTransactionTypeURI',
        tsPropertyName: 'haleyChatQuotaTransactionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
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
      }
    ];
  }


}
