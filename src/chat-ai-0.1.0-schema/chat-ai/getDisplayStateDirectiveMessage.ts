import { HaleyChatDirectiveMessage } from './haleyChatDirectiveMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetDisplayStateDirectiveMessage
 */
export class GetDisplayStateDirectiveMessage extends HaleyChatDirectiveMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetDisplayStateDirectiveMessage';
  }

  /**
   * Get property definitions for GetDisplayStateDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
