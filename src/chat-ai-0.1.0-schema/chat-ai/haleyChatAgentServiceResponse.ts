import { HaleyChatAgentServiceCommand } from './haleyChatAgentServiceCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAgentServiceResponse
 */
export class HaleyChatAgentServiceResponse extends HaleyChatAgentServiceCommand {
  public haleyInterAccountRequestURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAgentServiceResponse';
  }

  /**
   * Get property definitions for HaleyChatAgentServiceResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyInterAccountRequestURI',
        tsPropertyName: 'haleyInterAccountRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
