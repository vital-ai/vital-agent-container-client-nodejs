import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedPredictionModel
 */
export class Edge_hasSelectedPredictionModel extends VITAL_TaxonomyEdge {
  public selectedPredictionModelName?: string;
  public globalPredictionModel?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedPredictionModel';
  }

  /**
   * Get property definitions for Edge_hasSelectedPredictionModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasSelectedPredictionModelName',
        tsPropertyName: 'selectedPredictionModelName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#isGlobalPredictionModel',
        tsPropertyName: 'globalPredictionModel',
        type: 'boolean',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSelectedPredictionModel
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedPredictionModel';
  }
}
