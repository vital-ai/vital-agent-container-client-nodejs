import { HaleyNotification } from '../haley/haleyNotification';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatInternalNotification
 */
export class HaleyChatInternalNotification extends HaleyNotification {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatInternalNotification';
  }

  /**
   * Get property definitions for HaleyChatInternalNotification
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
