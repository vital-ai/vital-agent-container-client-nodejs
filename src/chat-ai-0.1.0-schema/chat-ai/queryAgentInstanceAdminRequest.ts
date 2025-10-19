import { HaleyChatAgentAdminCommand } from './haleyChatAgentAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#QueryAgentInstanceAdminRequest
 */
export class QueryAgentInstanceAdminRequest extends HaleyChatAgentAdminCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#QueryAgentInstanceAdminRequest';
  }

  /**
   * Get property definitions for QueryAgentInstanceAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
