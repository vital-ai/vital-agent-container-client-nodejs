import { HaleyNotification } from '../haley/haleyNotification';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatNotification
 */
export class HaleyChatNotification extends HaleyNotification {
  public testCaseMessage?: boolean;
  public testCaseString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatNotification';
  }

  /**
   * Get property definitions for HaleyChatNotification
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasTestCaseString',
        tsPropertyName: 'testCaseString',
        type: 'string',
        required: false
      }
    ];
  }


}
