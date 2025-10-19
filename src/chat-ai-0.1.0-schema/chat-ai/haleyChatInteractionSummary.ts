import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatInteractionSummary
 */
export class HaleyChatInteractionSummary extends VITAL_Node {
  public haleyChatStartMessageURI?: string;
  public haleyChatInteractionSummary?: string;
  public haleyChatEndMessageURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatInteractionSummary';
  }

  /**
   * Get property definitions for HaleyChatInteractionSummary
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatStartMessageURI',
        tsPropertyName: 'haleyChatStartMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionSummary',
        tsPropertyName: 'haleyChatInteractionSummary',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatEndMessageURI',
        tsPropertyName: 'haleyChatEndMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
