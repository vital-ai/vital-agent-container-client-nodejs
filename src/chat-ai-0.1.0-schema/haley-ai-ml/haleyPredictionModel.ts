import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel
 */
export class HaleyPredictionModel extends VITAL_Node {
  public version?: string;
  public predictionImplementingClass?: string;
  public predictionModelType?: string;
  public predictionModelEndpoint?: string;
  public modelIdentifier?: string;
  public predictionModelStructureType?: string;
  public predictionModelClassURI?: string;
  public globalPredictionModel?: boolean;
  public predictionModelProvider?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#HaleyPredictionModel';
  }

  /**
   * Get property definitions for HaleyPredictionModel
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasPredictionImplementingClass',
        tsPropertyName: 'predictionImplementingClass',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasPredictionModelType',
        tsPropertyName: 'predictionModelType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasPredictionModelEndpoint',
        tsPropertyName: 'predictionModelEndpoint',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasPredictionModelStructureType',
        tsPropertyName: 'predictionModelStructureType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasPredictionModelClassURI',
        tsPropertyName: 'predictionModelClassURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#isGlobalPredictionModel',
        tsPropertyName: 'globalPredictionModel',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasPredictionModelProvider',
        tsPropertyName: 'predictionModelProvider',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
