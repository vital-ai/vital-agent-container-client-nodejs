import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChatMessage
 */
export class KGChatMessage extends KGNode {
  public kGRoomURI?: string;
  public kGChatInteractionURI?: string;
  public kGChatMessageDateTime?: string | Date;
  public kGChatMessageText?: string;
  public kGChatMessageType?: string;
  public primaryLanguageType?: string;
  public kGChatMessageSequence?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGChatMessage';
  }

  /**
   * Get property definitions for KGChatMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRoomURI',
        tsPropertyName: 'kGRoomURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionURI',
        tsPropertyName: 'kGChatInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageDateTime',
        tsPropertyName: 'kGChatMessageDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageText',
        tsPropertyName: 'kGChatMessageText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageType',
        tsPropertyName: 'kGChatMessageType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasPrimaryLanguageType',
        tsPropertyName: 'primaryLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatMessageSequence',
        tsPropertyName: 'kGChatMessageSequence',
        type: 'number',
        required: false
      }
    ];
  }


}
