import { HaleyChatAdminNotification } from './haleyChatAdminNotification';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#SendDataModificationChatAdminNotification
 */
export class SendDataModificationChatAdminNotification extends HaleyChatAdminNotification {
  public dataModificationEventType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#SendDataModificationChatAdminNotification';
  }

  /**
   * Get property definitions for SendDataModificationChatAdminNotification
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasDataModificationEventType',
        tsPropertyName: 'dataModificationEventType',
        type: 'string',
        required: false
      }
    ];
  }


}
