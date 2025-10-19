import { HaleyNotificationMessage } from '../vital-aimp/haleyNotificationMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage
 */
export class HaleyChatNotificationMessage extends HaleyNotificationMessage {
  public haleyChatNotificationMessageTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatNotificationMessage';
  }

  /**
   * Get property definitions for HaleyChatNotificationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatNotificationMessageTypeURI',
        tsPropertyName: 'haleyChatNotificationMessageTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
