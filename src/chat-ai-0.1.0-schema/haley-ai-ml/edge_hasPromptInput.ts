import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#Edge_hasPromptInput
 */
export class Edge_hasPromptInput extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#Edge_hasPromptInput';
  }

  /**
   * Get property definitions for Edge_hasPromptInput
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasPromptInput
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-ml#Edge_hasPromptInput';
  }
}
