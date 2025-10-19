import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAggregation
 */
export class KGAggregation extends VITAL_Node {
  public kGAggregationTypeURI?: string;
  public kGAggregationName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGAggregation';
  }

  /**
   * Get property definitions for KGAggregation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAggregationTypeURI',
        tsPropertyName: 'kGAggregationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
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
