import { HaleyChatInternalNotification } from './haleyChatInternalNotification';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ChatQuotaInternalNotification
 */
export class ChatQuotaInternalNotification extends HaleyChatInternalNotification {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ChatQuotaInternalNotification';
  }

  /**
   * Get property definitions for ChatQuotaInternalNotification
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
