import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#Edge_hasPredictionModelInput
 */
export class Edge_hasPredictionModelInput extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#Edge_hasPredictionModelInput';
  }

  /**
   * Get property definitions for Edge_hasPredictionModelInput
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasPredictionModelInput
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-ml#Edge_hasPredictionModelInput';
  }
}
