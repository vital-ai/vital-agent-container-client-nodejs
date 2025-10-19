import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChatInteraction
 */
export class KGChatInteraction extends KGNode {
  public kGChatInteractionSummaryText?: string;
  public kGChatInteractionCompleteText?: string;
  public kGChatInteractionType?: string;
  public kGRoomURI?: string;
  public kGChannelURI?: string;
  public haleyChatInteractionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGChatInteraction';
  }

  /**
   * Get property definitions for KGChatInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionSummaryText',
        tsPropertyName: 'kGChatInteractionSummaryText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionCompleteText',
        tsPropertyName: 'kGChatInteractionCompleteText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionType',
        tsPropertyName: 'kGChatInteractionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRoomURI',
        tsPropertyName: 'kGRoomURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChannelURI',
        tsPropertyName: 'kGChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionURI',
        tsPropertyName: 'haleyChatInteractionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
