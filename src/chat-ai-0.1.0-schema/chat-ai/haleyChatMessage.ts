import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatMessage
 */
export class HaleyChatMessage extends VITAL_Node {
  public chatEndTimestamp?: string | Date;
  public sessionID?: string;
  public haleyChatMessageType?: string;
  /** URI reference to one of: AgentObject, HaleyChatMessage */
  public bridgeHaleyMessageURI?: string;
  public messageRequestURI?: string;
  public chatIncrementalEncodedVoiceData?: string;
  public chatTimestamp?: string | Date;
  public chatMessageIPAddress?: string;
  public haleyChatMessageCreditUsed?: number;
  public haleyChatVoiceLanguageTypeURI?: string;
  public chatPartialMessage?: boolean;
  public haleyChatInteractionModelProviderURI?: string;
  public haleyChatInteractionResponseModeURI?: string;
  public haleyChatInteractionURI?: string;
  public chatStartTimestamp?: string | Date;
  public geoAPIJSON?: string;
  public accountURI?: string;
  public haleyChatCreditSourceURI?: string;
  public chatPartialTextMessage?: string;
  public chatVoicePath?: string;
  public haleyChatTextToSpeak?: string;
  public chatMessageActorSequence?: string;
  public channelURI?: string;
  public chatIncrementalTextMessage?: string;
  public chatTextMessage?: string;
  public chatEncodedVoiceData?: string;
  public chatPartialEncodedVoiceData?: string;
  public chatMessageSequence?: number;
  public chatEncodedVoiceContentType?: string;
  declare public loginURI?: string;
  public haleyChatInteractionModeURI?: string;
  public chatIncrementalMessage?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatMessage';
  }

  /**
   * Get property definitions for HaleyChatMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatEndTimestamp',
        tsPropertyName: 'chatEndTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSessionID',
        tsPropertyName: 'sessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatMessageType',
        tsPropertyName: 'haleyChatMessageType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasBridgeHaleyMessageURI',
        tsPropertyName: 'bridgeHaleyMessageURI',
        type: 'http://vital.ai/ontology/vital-aimp#AgentObject | http://vital.ai/ontology/chat-ai#HaleyChatMessage',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasMessageRequestURI',
        tsPropertyName: 'messageRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatIncrementalEncodedVoiceData',
        tsPropertyName: 'chatIncrementalEncodedVoiceData',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatMessageIPAddress',
        tsPropertyName: 'chatMessageIPAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatMessageCreditUsed',
        tsPropertyName: 'haleyChatMessageCreditUsed',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatVoiceLanguageTypeURI',
        tsPropertyName: 'haleyChatVoiceLanguageTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isChatPartialMessage',
        tsPropertyName: 'chatPartialMessage',
        type: 'boolean',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionResponseModeURI',
        tsPropertyName: 'haleyChatInteractionResponseModeURI',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatStartTimestamp',
        tsPropertyName: 'chatStartTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeoAPIJSON',
        tsPropertyName: 'geoAPIJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCreditSourceURI',
        tsPropertyName: 'haleyChatCreditSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatPartialTextMessage',
        tsPropertyName: 'chatPartialTextMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatVoicePath',
        tsPropertyName: 'chatVoicePath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTextToSpeak',
        tsPropertyName: 'haleyChatTextToSpeak',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatMessageActorSequence',
        tsPropertyName: 'chatMessageActorSequence',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelURI',
        tsPropertyName: 'channelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatIncrementalTextMessage',
        tsPropertyName: 'chatIncrementalTextMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatTextMessage',
        tsPropertyName: 'chatTextMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatEncodedVoiceData',
        tsPropertyName: 'chatEncodedVoiceData',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatPartialEncodedVoiceData',
        tsPropertyName: 'chatPartialEncodedVoiceData',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatMessageSequence',
        tsPropertyName: 'chatMessageSequence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatEncodedVoiceContentType',
        tsPropertyName: 'chatEncodedVoiceContentType',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModeURI',
        tsPropertyName: 'haleyChatInteractionModeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isChatIncrementalMessage',
        tsPropertyName: 'chatIncrementalMessage',
        type: 'boolean',
        required: false
      }
    ];
  }


}
