import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Edge_hasVerbPhrase
 */
export class Edge_hasVerbPhrase extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Edge_hasVerbPhrase';
  }

  /**
   * Get property definitions for Edge_hasVerbPhrase
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasVerbPhrase
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-nlp#Edge_hasVerbPhrase';
  }
}
