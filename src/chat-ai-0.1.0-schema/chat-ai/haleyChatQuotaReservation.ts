import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation
 */
export class HaleyChatQuotaReservation extends VITAL_Node {
  public estimatedInputTokenCount?: number;
  public haleyChatStatusMessage?: string;
  public haleyChatInteractionModelTypeURI?: string;
  public haleyChatInteractionModelProviderURI?: string;
  public haleyChatQuotaReservationStatusURI?: string;
  public haleyChatTaskURI?: string;
  public haleyChatInteractionURI?: string;
  public estimatedQuotaDebit?: number;
  declare public loginURI?: string;
  public accountURI?: string;
  public estimatedOutputTokenCount?: number;
  public haleyChatMessageURI?: string;
  public chatTimestamp?: string | Date;
  public estimatedModelCost?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatQuotaReservation';
  }

  /**
   * Get property definitions for HaleyChatQuotaReservation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasEstimatedInputTokenCount',
        tsPropertyName: 'estimatedInputTokenCount',
        type: 'number',
        required: false
      },
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelProviderURI',
        tsPropertyName: 'haleyChatInteractionModelProviderURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaReservationStatusURI',
        tsPropertyName: 'haleyChatQuotaReservationStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTaskURI',
        tsPropertyName: 'haleyChatTaskURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI',
        tsPropertyName: 'haleyChatInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasEstimatedQuotaDebit',
        tsPropertyName: 'estimatedQuotaDebit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasEstimatedOutputTokenCount',
        tsPropertyName: 'estimatedOutputTokenCount',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasEstimatedModelCost',
        tsPropertyName: 'estimatedModelCost',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
