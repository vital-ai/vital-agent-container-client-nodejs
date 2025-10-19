import { HaleyRequestMessage } from '../haley/haleyRequestMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand
 */
export class HaleyChatAdminCommand extends HaleyRequestMessage {
  public testCaseMessage?: boolean;
  public haleyChatCommandTypeURI?: string;
  public haleyChatTargetLoginURI?: string;
  public haleyChatTargetAccountURI?: string;
  public testCaseString?: string;
  public haleyChatCollectionTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAdminCommand';
  }

  /**
   * Get property definitions for HaleyChatAdminCommand
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTargetLoginURI',
        tsPropertyName: 'haleyChatTargetLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTargetAccountURI',
        tsPropertyName: 'haleyChatTargetAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasTestCaseString',
        tsPropertyName: 'testCaseString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCollectionTypeURI',
        tsPropertyName: 'haleyChatCollectionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
