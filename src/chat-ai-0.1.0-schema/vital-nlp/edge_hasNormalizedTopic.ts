import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedTopic
 */
export class Edge_hasNormalizedTopic extends VITAL_TaxonomyEdge {
  public normConfidence?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedTopic';
  }

  /**
   * Get property definitions for Edge_hasNormalizedTopic
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasNormConfidence',
        tsPropertyName: 'normConfidence',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasNormalizedTopic
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedTopic';
  }
}
