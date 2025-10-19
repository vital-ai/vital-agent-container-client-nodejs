import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Edge_hasContent
 */
export class Edge_hasContent extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Edge_hasContent';
  }

  /**
   * Get property definitions for Edge_hasContent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasContent
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-nlp#Edge_hasContent';
  }
}
