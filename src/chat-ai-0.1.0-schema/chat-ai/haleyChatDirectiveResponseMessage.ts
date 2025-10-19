import { HaleyDirectiveResponseMessage } from '../vital-aimp/haleyDirectiveResponseMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatDirectiveResponseMessage
 */
export class HaleyChatDirectiveResponseMessage extends HaleyDirectiveResponseMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatDirectiveResponseMessage';
  }

  /**
   * Get property definitions for HaleyChatDirectiveResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
