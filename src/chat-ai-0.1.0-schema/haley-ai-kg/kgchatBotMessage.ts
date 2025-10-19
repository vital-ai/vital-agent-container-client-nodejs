import { KGChatMessage } from './kgchatMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGChatBotMessage
 */
export class KGChatBotMessage extends KGChatMessage {
  public kGAgentURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGChatBotMessage';
  }

  /**
   * Get property definitions for KGChatBotMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentURI',
        tsPropertyName: 'kGAgentURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
