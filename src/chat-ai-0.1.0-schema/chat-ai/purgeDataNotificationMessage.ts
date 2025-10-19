import { HaleyChatNotificationMessage } from './haleyChatNotificationMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#PurgeDataNotificationMessage
 */
export class PurgeDataNotificationMessage extends HaleyChatNotificationMessage {
  public haleyChatCollectionTypeURI?: string;
  public haleyChatCacheCollectionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#PurgeDataNotificationMessage';
  }

  /**
   * Get property definitions for PurgeDataNotificationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCollectionTypeURI',
        tsPropertyName: 'haleyChatCollectionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCacheCollectionURI',
        tsPropertyName: 'haleyChatCacheCollectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
