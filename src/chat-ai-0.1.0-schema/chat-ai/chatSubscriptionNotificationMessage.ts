import { HaleyChatNotificationMessage } from './haleyChatNotificationMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ChatSubscriptionNotificationMessage
 */
export class ChatSubscriptionNotificationMessage extends HaleyChatNotificationMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ChatSubscriptionNotificationMessage';
  }

  /**
   * Get property definitions for ChatSubscriptionNotificationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
