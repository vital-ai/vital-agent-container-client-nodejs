import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetChatKGAdminRequest
 */
export class GetChatKGAdminRequest extends HaleyChatAdminCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetChatKGAdminRequest';
  }

  /**
   * Get property definitions for GetChatKGAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
