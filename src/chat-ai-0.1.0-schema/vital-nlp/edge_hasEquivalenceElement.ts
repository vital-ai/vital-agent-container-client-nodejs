import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceElement
 */
export class Edge_hasEquivalenceElement extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceElement';
  }

  /**
   * Get property definitions for Edge_hasEquivalenceElement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasEquivalenceElement
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-nlp#Edge_hasEquivalenceElement';
  }
}
