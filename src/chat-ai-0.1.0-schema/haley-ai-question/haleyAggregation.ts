import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAggregation
 */
export class HaleyAggregation extends VITAL_Node {
  public aggregationType?: string;
  public aggregationName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAggregation';
  }

  /**
   * Get property definitions for HaleyAggregation
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationName',
        tsPropertyName: 'aggregationName',
        type: 'string',
        required: false
      }
    ];
  }


}
