import { HaleyChatInterAgentCommand } from './haleyChatInterAgentCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatInterAgentResponse
 */
export class HaleyChatInterAgentResponse extends HaleyChatInterAgentCommand {
  public haleyChatInterAgentResponseTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatInterAgentResponse';
  }

  /**
   * Get property definitions for HaleyChatInterAgentResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInterAgentResponseTypeURI',
        tsPropertyName: 'haleyChatInterAgentResponseTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
