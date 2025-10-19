import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentObject
 */
export class AgentObject extends VITAL_Node {
  public sessionID?: string;
  /** URI reference to one of: AgentObject, HaleyChatMessage */
  public bridgeHaleyMessageURI?: string;
  public messageRequestURI?: string;
  declare public loginURI?: string;
  public accountURI?: string;
  public sourceRequestURI?: string;
  public channelURI?: string;
  public requestURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentObject';
  }

  /**
   * Get property definitions for AgentObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSessionID',
        tsPropertyName: 'sessionID',
        type: 'string',
        required: false
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceRequestURI',
        tsPropertyName: 'sourceRequestURI',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestURI',
        tsPropertyName: 'requestURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
