import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#AggregationResult
 */
export class AggregationResult extends VITAL_Node {
  public value?: number;
  public aggregationType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#AggregationResult';
  }

  /**
   * Get property definitions for AggregationResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasValue',
        tsPropertyName: 'value',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasAggregationType',
        tsPropertyName: 'aggregationType',
        type: 'string',
        required: false
      }
    ];
  }


}
