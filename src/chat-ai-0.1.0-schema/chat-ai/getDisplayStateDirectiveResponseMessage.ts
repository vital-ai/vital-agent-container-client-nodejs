import { HaleyChatDirectiveResponseMessage } from './haleyChatDirectiveResponseMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GetDisplayStateDirectiveResponseMessage
 */
export class GetDisplayStateDirectiveResponseMessage extends HaleyChatDirectiveResponseMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GetDisplayStateDirectiveResponseMessage';
  }

  /**
   * Get property definitions for GetDisplayStateDirectiveResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
