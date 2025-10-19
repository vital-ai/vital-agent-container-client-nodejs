import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedEntity
 */
export class Edge_hasNormalizedEntity extends VITAL_TaxonomyEdge {
  public normConfidence?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedEntity';
  }

  /**
   * Get property definitions for Edge_hasNormalizedEntity
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
   * Get the VitalSigns type URI for Edge_hasNormalizedEntity
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-nlp#Edge_hasNormalizedEntity';
  }
}
