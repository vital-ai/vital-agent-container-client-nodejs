import { HaleyChatNotificationMessage } from './haleyChatNotificationMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ChatCreditNotificationMessage
 */
export class ChatCreditNotificationMessage extends HaleyChatNotificationMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ChatCreditNotificationMessage';
  }

  /**
   * Get property definitions for ChatCreditNotificationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
