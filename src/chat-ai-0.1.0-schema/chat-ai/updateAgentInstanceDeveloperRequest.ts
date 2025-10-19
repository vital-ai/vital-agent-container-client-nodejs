import { HaleyChatDeveloperCommand } from './haleyChatDeveloperCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#UpdateAgentInstanceDeveloperRequest
 */
export class UpdateAgentInstanceDeveloperRequest extends HaleyChatDeveloperCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#UpdateAgentInstanceDeveloperRequest';
  }

  /**
   * Get property definitions for UpdateAgentInstanceDeveloperRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
