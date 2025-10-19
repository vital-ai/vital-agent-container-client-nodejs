import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel
 */
export class HaleyRecommendationModel extends VITAL_Node {
  public version?: string;
  public recommendationModelType?: string;
  public recommendationModelEndpoint?: string;
  public recommendationImplementingClass?: string;
  public modelIdentifier?: string;
  public globalRecommendationModel?: boolean;
  public recommendationModelStructureType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#HaleyRecommendationModel';
  }

  /**
   * Get property definitions for HaleyRecommendationModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasVersion',
        tsPropertyName: 'version',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasRecommendationModelType',
        tsPropertyName: 'recommendationModelType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasRecommendationModelEndpoint',
        tsPropertyName: 'recommendationModelEndpoint',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasRecommendationImplementingClass',
        tsPropertyName: 'recommendationImplementingClass',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasModelIdentifier',
        tsPropertyName: 'modelIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#isGlobalRecommendationModel',
        tsPropertyName: 'globalRecommendationModel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasRecommendationModelStructureType',
        tsPropertyName: 'recommendationModelStructureType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
