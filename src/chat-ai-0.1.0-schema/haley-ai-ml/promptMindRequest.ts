import { HaleyMindRequest } from '../haley/haleyMindRequest';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#PromptMindRequest
 */
export class PromptMindRequest extends HaleyMindRequest {
  public haleyPromptURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#PromptMindRequest';
  }

  /**
   * Get property definitions for PromptMindRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasHaleyPromptURI',
        tsPropertyName: 'haleyPromptURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
