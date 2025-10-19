import { HaleyRequestMessage } from '../haley/haleyRequestMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatManagerCommand
 */
export class HaleyChatManagerCommand extends HaleyRequestMessage {
  public haleyChatCollectionTypeURI?: string;
  public haleyChatCommandTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatManagerCommand';
  }

  /**
   * Get property definitions for HaleyChatManagerCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCollectionTypeURI',
        tsPropertyName: 'haleyChatCollectionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCommandTypeURI',
        tsPropertyName: 'haleyChatCommandTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
