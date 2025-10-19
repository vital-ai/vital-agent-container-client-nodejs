import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPMessage
 */
export class AIMPMessage extends VITAL_Node {
  public sourceUserName?: string;
  public encryptedPayload?: string;
  public reactionToSessionID?: string;
  public sessionID?: string;
  public jwtKeyIdentifier?: string;
  public botURI?: string;
  /** URI reference to one of: AgentObject, HaleyChatMessage */
  public bridgeHaleyMessageURI?: string;
  public payloadStyleTypeURI?: string;
  public requestURI?: string;
  public partialResultTotalPayloadCount?: number;
  /** URI reference to one of: HaleyAccessBotRole, HaleyAccessGroupRole, HaleyAccessOfficeRole, HaleyAccessAccountRole, HaleyAccessTeamRole, HaleyAccessLoginRole */
  public accessGrantRoleOutcomeURI?: string;
  public masterUserID?: string;
  public historyMessage?: boolean;
  public replyChannelURI?: string;
  public compressed?: boolean;
  public keyHash?: string;
  public geoAPIJSON?: string;
  public internalOnly?: boolean;
  public accountURI?: string;
  public senderIdentity?: string;
  public activityTaskIdentifier?: string;
  public interactMode?: boolean;
  public requestedPayloadStyleTypeURI?: string;
  public endpointURI?: string;
  public accessOutcomeSerialized?: string;
  public authLoginTunnel?: boolean;
  public partialResultMessageCount?: number;
  public dialogResponseTypeURI?: string;
  public accessGrantOutcomeURI?: string;
  public sourceAccountName?: string;
  public timezone?: string;
  public channelsHistory?: string;
  public channelHistoryItem?: string[];
  public jweEncryptedString?: string;
  declare public loginURI?: string;
  public textToSpeak?: string;
  public partialResult?: boolean;
  public requestCompression?: boolean;
  public signature?: string;
  public containsPII?: boolean;
  public jwtJSON?: string;
  public payload?: string;
  public username?: string;
  public queueName?: string;
  public localTime?: string;
  public destinationAccountName?: string;
  public authSessionID?: string;
  declare public geolocation?: string;
  public jweKeyIdentifier?: string;
  public sourceRequestURI?: string;
  public jwtEncodedString?: string;
  public text?: string;
  public userID?: string;
  public recipientIdentity?: string;
  public sourceUserID?: string;
  public broadcastOnly?: boolean;
  public channelURI?: string;
  public partialResultPayloadCount?: number;
  public finalResponse?: boolean;
  public destinationAccountURI?: string;
  public ipAddress?: string;
  public deviceInfo?: string;
  public partialResultTotalMessageCount?: number;
  public replyTo?: string;
  public sourceAccountURI?: string;
  public channelHistoryListJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AIMPMessage';
  }

  /**
   * Get property definitions for AIMPMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceUserName',
        tsPropertyName: 'sourceUserName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEncryptedPayload',
        tsPropertyName: 'encryptedPayload',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasReactionToSessionID',
        tsPropertyName: 'reactionToSessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSessionID',
        tsPropertyName: 'sessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtKeyIdentifier',
        tsPropertyName: 'jwtKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBotURI',
        tsPropertyName: 'botURI',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPayloadStyleTypeURI',
        tsPropertyName: 'payloadStyleTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestURI',
        tsPropertyName: 'requestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPartialResultTotalPayloadCount',
        tsPropertyName: 'partialResultTotalPayloadCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessGrantRoleOutcomeURI',
        tsPropertyName: 'accessGrantRoleOutcomeURI',
        type: 'http://vital.ai/ontology/haley#HaleyAccessBotRole | http://vital.ai/ontology/haley#HaleyAccessGroupRole | http://vital.ai/ontology/haley#HaleyAccessOfficeRole | http://vital.ai/ontology/haley#HaleyAccessAccountRole | http://vital.ai/ontology/haley#HaleyAccessTeamRole | http://vital.ai/ontology/haley#HaleyAccessLoginRole',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMasterUserID',
        tsPropertyName: 'masterUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHistoryMessage',
        tsPropertyName: 'historyMessage',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasReplyChannelURI',
        tsPropertyName: 'replyChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCompressed',
        tsPropertyName: 'compressed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasKeyHash',
        tsPropertyName: 'keyHash',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeoAPIJSON',
        tsPropertyName: 'geoAPIJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInternalOnly',
        tsPropertyName: 'internalOnly',
        type: 'boolean',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSenderIdentity',
        tsPropertyName: 'senderIdentity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasActivityTaskIdentifier',
        tsPropertyName: 'activityTaskIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isInteractMode',
        tsPropertyName: 'interactMode',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestedPayloadStyleTypeURI',
        tsPropertyName: 'requestedPayloadStyleTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEndpointURI',
        tsPropertyName: 'endpointURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessOutcomeSerialized',
        tsPropertyName: 'accessOutcomeSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isAuthLoginTunnel',
        tsPropertyName: 'authLoginTunnel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPartialResultMessageCount',
        tsPropertyName: 'partialResultMessageCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDialogResponseTypeURI',
        tsPropertyName: 'dialogResponseTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessGrantOutcomeURI',
        tsPropertyName: 'accessGrantOutcomeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceAccountName',
        tsPropertyName: 'sourceAccountName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTimezone',
        tsPropertyName: 'timezone',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelsHistory',
        tsPropertyName: 'channelsHistory',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelHistoryItem',
        tsPropertyName: 'channelHistoryItem',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJweEncryptedString',
        tsPropertyName: 'jweEncryptedString',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTextToSpeak',
        tsPropertyName: 'textToSpeak',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isPartialResult',
        tsPropertyName: 'partialResult',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isRequestCompression',
        tsPropertyName: 'requestCompression',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSignature',
        tsPropertyName: 'signature',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isContainsPII',
        tsPropertyName: 'containsPII',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtJSON',
        tsPropertyName: 'jwtJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPayload',
        tsPropertyName: 'payload',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUsername',
        tsPropertyName: 'username',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQueueName',
        tsPropertyName: 'queueName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLocalTime',
        tsPropertyName: 'localTime',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationAccountName',
        tsPropertyName: 'destinationAccountName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAuthSessionID',
        tsPropertyName: 'authSessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeolocation',
        tsPropertyName: 'geolocation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJweKeyIdentifier',
        tsPropertyName: 'jweKeyIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceRequestURI',
        tsPropertyName: 'sourceRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasJwtEncodedString',
        tsPropertyName: 'jwtEncodedString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasText',
        tsPropertyName: 'text',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUserID',
        tsPropertyName: 'userID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipientIdentity',
        tsPropertyName: 'recipientIdentity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceUserID',
        tsPropertyName: 'sourceUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isBroadcastOnly',
        tsPropertyName: 'broadcastOnly',
        type: 'boolean',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPartialResultPayloadCount',
        tsPropertyName: 'partialResultPayloadCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isFinalResponse',
        tsPropertyName: 'finalResponse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationAccountURI',
        tsPropertyName: 'destinationAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIpAddress',
        tsPropertyName: 'ipAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDeviceInfo',
        tsPropertyName: 'deviceInfo',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPartialResultTotalMessageCount',
        tsPropertyName: 'partialResultTotalMessageCount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isReplyTo',
        tsPropertyName: 'replyTo',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceAccountURI',
        tsPropertyName: 'sourceAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelHistoryListJSON',
        tsPropertyName: 'channelHistoryListJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
