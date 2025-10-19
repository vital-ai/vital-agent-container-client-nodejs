import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPMessageContent
 */
export class AIMPMessageContent extends VITAL_Node {
  public generatedText?: string;
  public text?: string;
  public aIMPMessageContentTypeURI?: string;
  public messageContentJSON?: string;
  public sessionID?: string;
  public generatedAccumulatedText?: string;
  public chatMessageActorSequence?: string;
  public encodedVoiceData?: string;
  public messageRequestURI?: string;
  public channelURI?: string;
  public chatMessageIPAddress?: string;
  public chatMessageSequence?: number;
  public haleyChatInteractionURI?: string;
  public generationDateTime?: string | Date;
  public geoAPIJSON?: string;
  declare public loginURI?: string;
  public accountURI?: string;
  public haleyChatCreditSourceURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AIMPMessageContent';
  }

  /**
   * Get property definitions for AIMPMessageContent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeneratedText',
        tsPropertyName: 'generatedText',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPMessageContentTypeURI',
        tsPropertyName: 'aIMPMessageContentTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageContentJSON',
        tsPropertyName: 'messageContentJSON',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasGeneratedAccumulatedText',
        tsPropertyName: 'generatedAccumulatedText',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEncodedVoiceData',
        tsPropertyName: 'encodedVoiceData',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasMessageRequestURI',
        tsPropertyName: 'messageRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelURI',
        tsPropertyName: 'channelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasChatMessageIPAddress',
        tsPropertyName: 'chatMessageIPAddress',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI',
        tsPropertyName: 'haleyChatInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasGenerationDateTime',
        tsPropertyName: 'generationDateTime',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCreditSourceURI',
        tsPropertyName: 'haleyChatCreditSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
