import { HaleyChatNotificationMessage } from './haleyChatNotificationMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ModifiedAccountLoginNotificationMessage
 */
export class ModifiedAccountLoginNotificationMessage extends HaleyChatNotificationMessage {
  public accountURI?: string;
  declare public loginURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ModifiedAccountLoginNotificationMessage';
  }

  /**
   * Get property definitions for ModifiedAccountLoginNotificationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
