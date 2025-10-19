import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAggregationResult
 */
export class HaleyAggregationResult extends VITAL_Node {
  public aggregationType?: string;
  public aggregationDoubleValue?: number;
  public aggregationIntegerValue?: number;
  public aggregationName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAggregationResult';
  }

  /**
   * Get property definitions for HaleyAggregationResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationType',
        tsPropertyName: 'aggregationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationDoubleValue',
        tsPropertyName: 'aggregationDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationIntegerValue',
        tsPropertyName: 'aggregationIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationName',
        tsPropertyName: 'aggregationName',
        type: 'string',
        required: false
      }
    ];
  }


}
