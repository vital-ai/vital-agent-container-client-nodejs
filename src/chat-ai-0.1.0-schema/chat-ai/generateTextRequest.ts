import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GenerateTextRequest
 */
export class GenerateTextRequest extends HaleyChatCommand {
  public streamModelResults?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GenerateTextRequest';
  }

  /**
   * Get property definitions for GenerateTextRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#isStreamModelResults',
        tsPropertyName: 'streamModelResults',
        type: 'boolean',
        required: false
      }
    ];
  }


}
