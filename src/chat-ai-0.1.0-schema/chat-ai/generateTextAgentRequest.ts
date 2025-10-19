import { HaleyChatAgentRequest } from './haleyChatAgentRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#GenerateTextAgentRequest
 */
export class GenerateTextAgentRequest extends HaleyChatAgentRequest {
  public streamModelResults?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#GenerateTextAgentRequest';
  }

  /**
   * Get property definitions for GenerateTextAgentRequest
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
