import { HaleyChatDeveloperCommand } from './haleyChatDeveloperCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#DeployAgentInstanceDeveloperRequest
 */
export class DeployAgentInstanceDeveloperRequest extends HaleyChatDeveloperCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#DeployAgentInstanceDeveloperRequest';
  }

  /**
   * Get property definitions for DeployAgentInstanceDeveloperRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
