import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedPrompt
 */
export class Edge_hasSelectedPrompt extends VITAL_TaxonomyEdge {
  public selectedPromptName?: string;
  public globalPrompt?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedPrompt';
  }

  /**
   * Get property definitions for Edge_hasSelectedPrompt
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasSelectedPromptName',
        tsPropertyName: 'selectedPromptName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#isGlobalPrompt',
        tsPropertyName: 'globalPrompt',
        type: 'boolean',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSelectedPrompt
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedPrompt';
  }
}
