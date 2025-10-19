import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAggregationResult
 */
export class KGAggregationResult extends VITAL_Node {
  public kGAggregationIntegerValue?: number;
  public kGAggregationTypeURI?: string;
  public kGAggregationDoubleValue?: number;
  public kGAggregationName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGAggregationResult';
  }

  /**
   * Get property definitions for KGAggregationResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAggregationIntegerValue',
        tsPropertyName: 'kGAggregationIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAggregationTypeURI',
        tsPropertyName: 'kGAggregationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAggregationDoubleValue',
        tsPropertyName: 'kGAggregationDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAggregationName',
        tsPropertyName: 'kGAggregationName',
        type: 'string',
        required: false
      }
    ];
  }


}
