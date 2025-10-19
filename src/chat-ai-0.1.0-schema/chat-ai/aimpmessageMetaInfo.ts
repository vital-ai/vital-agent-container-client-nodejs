import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AIMPMessageMetaInfo
 */
export class AIMPMessageMetaInfo extends VITAL_Node {
  public messageChildChannelURI?: string;
  public messageRequestURI?: string;
  public messageParentChannelURI?: string;
  public messageURI?: string;
  public messageChannelHistory?: string;
  public messageReceiveDateTime?: string | Date;
  public messageSourceChannelURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AIMPMessageMetaInfo';
  }

  /**
   * Get property definitions for AIMPMessageMetaInfo
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasMessageChildChannelURI',
        tsPropertyName: 'messageChildChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasMessageRequestURI',
        tsPropertyName: 'messageRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasMessageParentChannelURI',
        tsPropertyName: 'messageParentChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasMessageURI',
        tsPropertyName: 'messageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasMessageChannelHistory',
        tsPropertyName: 'messageChannelHistory',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasMessageReceiveDateTime',
        tsPropertyName: 'messageReceiveDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasMessageSourceChannelURI',
        tsPropertyName: 'messageSourceChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
