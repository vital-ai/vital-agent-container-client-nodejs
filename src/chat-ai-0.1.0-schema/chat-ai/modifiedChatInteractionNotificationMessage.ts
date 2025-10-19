import { HaleyChatNotificationMessage } from './haleyChatNotificationMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ModifiedChatInteractionNotificationMessage
 */
export class ModifiedChatInteractionNotificationMessage extends HaleyChatNotificationMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ModifiedChatInteractionNotificationMessage';
  }

  /**
   * Get property definitions for ModifiedChatInteractionNotificationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
