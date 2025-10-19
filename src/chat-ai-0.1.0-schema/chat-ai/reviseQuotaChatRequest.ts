import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ReviseQuotaChatRequest
 */
export class ReviseQuotaChatRequest extends HaleyChatCommand {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ReviseQuotaChatRequest';
  }

  /**
   * Get property definitions for ReviseQuotaChatRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
