import { HaleyDirectiveMessage } from '../vital-aimp/haleyDirectiveMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatDirectiveMessage
 */
export class HaleyChatDirectiveMessage extends HaleyDirectiveMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatDirectiveMessage';
  }

  /**
   * Get property definitions for HaleyChatDirectiveMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
