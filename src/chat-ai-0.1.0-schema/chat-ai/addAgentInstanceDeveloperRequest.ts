import { HaleyChatDeveloperCommand } from './haleyChatDeveloperCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AddAgentInstanceDeveloperRequest
 */
export class AddAgentInstanceDeveloperRequest extends HaleyChatDeveloperCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AddAgentInstanceDeveloperRequest';
  }

  /**
   * Get property definitions for AddAgentInstanceDeveloperRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
