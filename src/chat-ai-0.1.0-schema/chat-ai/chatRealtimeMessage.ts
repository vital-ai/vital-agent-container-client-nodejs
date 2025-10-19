import { HaleyRealtimeMessage } from '../vital-aimp/haleyRealtimeMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ChatRealtimeMessage
 */
export class ChatRealtimeMessage extends HaleyRealtimeMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ChatRealtimeMessage';
  }

  /**
   * Get property definitions for ChatRealtimeMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
