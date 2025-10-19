import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Edge_hasSentenceAbbreviationInstance
 */
export class Edge_hasSentenceAbbreviationInstance extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Edge_hasSentenceAbbreviationInstance';
  }

  /**
   * Get property definitions for Edge_hasSentenceAbbreviationInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSentenceAbbreviationInstance
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-nlp#Edge_hasSentenceAbbreviationInstance';
  }
}
