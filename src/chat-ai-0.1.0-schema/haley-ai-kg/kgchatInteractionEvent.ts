import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChatInteractionEvent
 */
export class KGChatInteractionEvent extends KGNode {
  public kGChatInteractionEventType?: string;
  public kGServiceEventURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGChatInteractionEvent';
  }

  /**
   * Get property definitions for KGChatInteractionEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGChatInteractionEventType',
        tsPropertyName: 'kGChatInteractionEventType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGServiceEventURI',
        tsPropertyName: 'kGServiceEventURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
