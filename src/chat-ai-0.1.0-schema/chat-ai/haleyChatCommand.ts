import { HaleyRequestMessage } from '../haley/haleyRequestMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatCommand
 */
export class HaleyChatCommand extends HaleyRequestMessage {
  public haleyChatCollectionTypeURI?: string;
  public testCaseMessage?: boolean;
  public haleyChatCommandTypeURI?: string;
  public testCaseString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatCommand';
  }

  /**
   * Get property definitions for HaleyChatCommand
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#isTestCaseMessage',
        tsPropertyName: 'testCaseMessage',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCommandTypeURI',
        tsPropertyName: 'haleyChatCommandTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasTestCaseString',
        tsPropertyName: 'testCaseString',
        type: 'string',
        required: false
      }
    ];
  }


}
