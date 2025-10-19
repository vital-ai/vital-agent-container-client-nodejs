import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatInteraction
 */
export class HaleyChatInteraction extends VITAL_Node {
  public agentVariantURI?: string;
  public haleyChatInteractionModelTypeURI?: string;
  public currentAssistant?: boolean;
  public chatUpdateTimestamp?: string | Date;
  public initiatingMessageURI?: string;
  public haleyChatInteractionScopeLoginURI?: string;
  public haleyChatInteractionStatusURI?: string;
  public titleManuallySet?: boolean;
  public agentInstallURI?: string;
  public haleyChatQuotaCreditUsed?: number;
  public haleyChatInteractionModelProviderURI?: string;
  public haleyChatInteractionTypeURI?: string;
  public haleyChatQuotaStatusURI?: string;
  public haleyChatInteractionScopeChannelURI?: string;
  public haleyChatInteractionScopeURI?: string;
  public haleyChatInteractionCategoryURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatInteraction';
  }

  /**
   * Get property definitions for HaleyChatInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentVariantURI',
        tsPropertyName: 'agentVariantURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI',
        tsPropertyName: 'haleyChatInteractionModelTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isCurrentAssistant',
        tsPropertyName: 'currentAssistant',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatUpdateTimestamp',
        tsPropertyName: 'chatUpdateTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasInitiatingMessageURI',
        tsPropertyName: 'initiatingMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeLoginURI',
        tsPropertyName: 'haleyChatInteractionScopeLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionStatusURI',
        tsPropertyName: 'haleyChatInteractionStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isTitleManuallySet',
        tsPropertyName: 'titleManuallySet',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentInstallURI',
        tsPropertyName: 'agentInstallURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditUsed',
        tsPropertyName: 'haleyChatQuotaCreditUsed',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionTypeURI',
        tsPropertyName: 'haleyChatInteractionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaStatusURI',
        tsPropertyName: 'haleyChatQuotaStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeChannelURI',
        tsPropertyName: 'haleyChatInteractionScopeChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionScopeURI',
        tsPropertyName: 'haleyChatInteractionScopeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionCategoryURI',
        tsPropertyName: 'haleyChatInteractionCategoryURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
