import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#Edge_hasPredictionModel
 */
export class Edge_hasPredictionModel extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#Edge_hasPredictionModel';
  }

  /**
   * Get property definitions for Edge_hasPredictionModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasPredictionModel
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-ml#Edge_hasPredictionModel';
  }
}
