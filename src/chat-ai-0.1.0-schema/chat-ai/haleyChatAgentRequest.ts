import { HaleyInterAccountRequest } from '../haley/haleyInterAccountRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAgentRequest
 */
export class HaleyChatAgentRequest extends HaleyInterAccountRequest {
  public messageRequestURI?: string;
  declare public loginURI?: string;
  public sessionID?: string;
  public accountURI?: string;
  public requestURI?: string;
  public channelURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAgentRequest';
  }

  /**
   * Get property definitions for HaleyChatAgentRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
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
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSessionID',
        tsPropertyName: 'sessionID',
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
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestURI',
        tsPropertyName: 'requestURI',
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
      }
    ];
  }


}
