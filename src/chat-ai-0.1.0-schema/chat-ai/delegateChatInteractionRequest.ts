import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#DelegateChatInteractionRequest
 */
export class DelegateChatInteractionRequest extends HaleyChatCommand {
  public agentInstallURI?: string;
  public haleyLead?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#DelegateChatInteractionRequest';
  }

  /**
   * Get property definitions for DelegateChatInteractionRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentInstallURI',
        tsPropertyName: 'agentInstallURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyLead',
        tsPropertyName: 'haleyLead',
        type: 'boolean',
        required: false
      }
    ];
  }


}
