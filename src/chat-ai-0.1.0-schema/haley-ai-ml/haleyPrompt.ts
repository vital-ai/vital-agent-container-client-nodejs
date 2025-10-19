import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#HaleyPrompt
 */
export class HaleyPrompt extends VITAL_Node {
  public globalPrompt?: boolean;
  public promptString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#HaleyPrompt';
  }

  /**
   * Get property definitions for HaleyPrompt
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#isGlobalPrompt',
        tsPropertyName: 'globalPrompt',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasPromptString',
        tsPropertyName: 'promptString',
        type: 'string',
        required: false
      }
    ];
  }


}
