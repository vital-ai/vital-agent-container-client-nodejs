import { HaleyChatNotificationMessage } from './haleyChatNotificationMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ModifiedChatKGNotificationMessage
 */
export class ModifiedChatKGNotificationMessage extends HaleyChatNotificationMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ModifiedChatKGNotificationMessage';
  }

  /**
   * Get property definitions for ModifiedChatKGNotificationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
