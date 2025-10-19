import { KGChatMessage } from './kgchatMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChatUserMessage
 */
export class KGChatUserMessage extends KGChatMessage {
  public kGActorURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGChatUserMessage';
  }

  /**
   * Get property definitions for KGChatUserMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActorURI',
        tsPropertyName: 'kGActorURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
