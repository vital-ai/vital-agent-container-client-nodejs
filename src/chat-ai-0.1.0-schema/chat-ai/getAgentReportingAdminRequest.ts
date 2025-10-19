import { HaleyChatAgentAdminCommand } from './haleyChatAgentAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetAgentReportingAdminRequest
 */
export class GetAgentReportingAdminRequest extends HaleyChatAgentAdminCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetAgentReportingAdminRequest';
  }

  /**
   * Get property definitions for GetAgentReportingAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
