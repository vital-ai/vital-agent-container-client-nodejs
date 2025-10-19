import { HaleyRequestMessage } from '../haley/haleyRequestMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatInterAgentCommand
 */
export class HaleyChatInterAgentCommand extends HaleyRequestMessage {
  public haleyChatInterAgentCommandTypeURI?: string;
  public respondingInteractionURI?: string;
  public callingInteractionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatInterAgentCommand';
  }

  /**
   * Get property definitions for HaleyChatInterAgentCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInterAgentCommandTypeURI',
        tsPropertyName: 'haleyChatInterAgentCommandTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasRespondingInteractionURI',
        tsPropertyName: 'respondingInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasCallingInteractionURI',
        tsPropertyName: 'callingInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
