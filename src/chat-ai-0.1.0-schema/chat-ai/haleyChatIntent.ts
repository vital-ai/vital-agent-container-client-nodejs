import { HaleyIntentCommand } from '../haley/haleyIntentCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatIntent
 */
export class HaleyChatIntent extends HaleyIntentCommand {
  public streamModelResults?: boolean;
  public agentVariantURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatIntent';
  }

  /**
   * Get property definitions for HaleyChatIntent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#isStreamModelResults',
        tsPropertyName: 'streamModelResults',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAgentVariantURI',
        tsPropertyName: 'agentVariantURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
