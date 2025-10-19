import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage
 */
export class GetChannelHistoryMessage extends AIMPMessage {
  public messageURIs?: string[];
  public senderOrRecipient?: string;
  declare public recipient?: string;
  public minTimestamp?: number;
  public sender?: string;
  public messageURI?: string;
  public maxTimestamp?: number;
  public limit?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#GetChannelHistoryMessage';
  }

  /**
   * Get property definitions for GetChannelHistoryMessage
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
      }
    ];
  }


}
