import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedRecommendationModel
 */
export class Edge_hasSelectedRecommendationModel extends VITAL_TaxonomyEdge {
  public globalRecommendationModel?: boolean;
  public selectedRecommendationModelName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedRecommendationModel';
  }

  /**
   * Get property definitions for Edge_hasSelectedRecommendationModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#isGlobalRecommendationModel',
        tsPropertyName: 'globalRecommendationModel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasSelectedRecommendationModelName',
        tsPropertyName: 'selectedRecommendationModelName',
        type: 'string',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSelectedRecommendationModel
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-ml#Edge_hasSelectedRecommendationModel';
  }
}
