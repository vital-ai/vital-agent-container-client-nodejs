import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasAgentChatInteraction
 */
export class Edge_hasAgentChatInteraction extends VITAL_PeerEdge {
  public respondingAgentInstallURI?: string;
  public agentChatInteractionStatusURI?: string;
  public callingAgentInstallURI?: string;
  public agentChatInteractionStatusMessage?: string;
  public agentChatInteractionTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasAgentChatInteraction';
  }

  /**
   * Get property definitions for Edge_hasAgentChatInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasRespondingAgentInstallURI',
        tsPropertyName: 'respondingAgentInstallURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentChatInteractionStatusURI',
        tsPropertyName: 'agentChatInteractionStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasCallingAgentInstallURI',
        tsPropertyName: 'callingAgentInstallURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentChatInteractionStatusMessage',
        tsPropertyName: 'agentChatInteractionStatusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentChatInteractionTypeURI',
        tsPropertyName: 'agentChatInteractionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAgentChatInteraction
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasAgentChatInteraction';
  }
}
