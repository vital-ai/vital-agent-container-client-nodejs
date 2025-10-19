import { HaleyRequestMessage } from '../haley/haleyRequestMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatDeveloperCommand
 */
export class HaleyChatDeveloperCommand extends HaleyRequestMessage {
  public haleyChatCollectionTypeURI?: string;
  public haleyChatCommandTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatDeveloperCommand';
  }

  /**
   * Get property definitions for HaleyChatDeveloperCommand
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
