import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#RemoveAccountRequest
 */
export class RemoveAccountRequest extends HaleyChatCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#RemoveAccountRequest';
  }

  /**
   * Get property definitions for RemoveAccountRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
