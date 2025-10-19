import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetChatKGRequest
 */
export class GetChatKGRequest extends HaleyChatCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetChatKGRequest';
  }

  /**
   * Get property definitions for GetChatKGRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
