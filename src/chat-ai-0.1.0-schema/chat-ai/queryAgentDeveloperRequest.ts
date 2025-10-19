import { HaleyChatDeveloperCommand } from './haleyChatDeveloperCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#QueryAgentDeveloperRequest
 */
export class QueryAgentDeveloperRequest extends HaleyChatDeveloperCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#QueryAgentDeveloperRequest';
  }

  /**
   * Get property definitions for QueryAgentDeveloperRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
