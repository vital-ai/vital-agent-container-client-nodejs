import { HaleyChatNotification } from './haleyChatNotification';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AccountQuotaSyncChatNotification
 */
export class AccountQuotaSyncChatNotification extends HaleyChatNotification {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AccountQuotaSyncChatNotification';
  }

  /**
   * Get property definitions for AccountQuotaSyncChatNotification
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
