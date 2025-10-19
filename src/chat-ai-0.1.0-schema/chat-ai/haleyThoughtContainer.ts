import { HaleyContainer } from '../haley-ai-question/haleyContainer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyThoughtContainer
 */
export class HaleyThoughtContainer extends HaleyContainer {
  /** URI reference to one of: AIMPMessage, HaleyChatMessage */
  public haleyChatReferenceMessageURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyThoughtContainer';
  }

  /**
   * Get property definitions for HaleyThoughtContainer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatReferenceMessageURI',
        tsPropertyName: 'haleyChatReferenceMessageURI',
        type: 'http://vital.ai/ontology/vital-aimp#AIMPMessage | http://vital.ai/ontology/chat-ai#HaleyChatMessage',
        required: false,
        format: 'uri'
      }
    ];
  }


}
