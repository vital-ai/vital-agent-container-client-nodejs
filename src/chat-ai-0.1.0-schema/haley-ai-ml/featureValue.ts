import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#FeatureValue
 */
export class FeatureValue extends VITAL_Node {
  public featureStringValue?: string;
  public featureKey?: string;
  public featureWeight?: number;
  public featureType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#FeatureValue';
  }

  /**
   * Get property definitions for FeatureValue
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasFeatureStringValue',
        tsPropertyName: 'featureStringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasFeatureKey',
        tsPropertyName: 'featureKey',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasFeatureWeight',
        tsPropertyName: 'featureWeight',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasFeatureType',
        tsPropertyName: 'featureType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
