import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#QueryServiceAdminRequest
 */
export class QueryServiceAdminRequest extends HaleyChatAdminCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#QueryServiceAdminRequest';
  }

  /**
   * Get property definitions for QueryServiceAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
