import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage
 */
export class ChannelHistoryResponseMessage extends AIMPMessage {
  public messageURIs?: string[];
  public senderOrRecipient?: string;
  public messageSerialized?: string;
  public status?: string;
  declare public recipient?: string;
  public minTimestamp?: number;
  public sender?: string;
  public page?: number;
  public messageURI?: string;
  public maxTimestamp?: number;
  public limit?: number;
  public totalPages?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ChannelHistoryResponseMessage';
  }

  /**
   * Get property definitions for ChannelHistoryResponseMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageURIs',
        tsPropertyName: 'messageURIs',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSenderOrRecipient',
        tsPropertyName: 'senderOrRecipient',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageSerialized',
        tsPropertyName: 'messageSerialized',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasStatus',
        tsPropertyName: 'status',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipient',
        tsPropertyName: 'recipient',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMinTimestamp',
        tsPropertyName: 'minTimestamp',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSender',
        tsPropertyName: 'sender',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPage',
        tsPropertyName: 'page',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageURI',
        tsPropertyName: 'messageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMaxTimestamp',
        tsPropertyName: 'maxTimestamp',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLimit',
        tsPropertyName: 'limit',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTotalPages',
        tsPropertyName: 'totalPages',
        type: 'number',
        required: false
      }
    ];
  }


}
