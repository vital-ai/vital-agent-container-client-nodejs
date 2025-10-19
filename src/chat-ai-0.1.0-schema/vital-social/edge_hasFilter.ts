import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasFilter
 */
export class Edge_hasFilter extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#Edge_hasFilter';
  }

  /**
   * Get property definitions for Edge_hasFilter
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasFilter
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasFilter';
  }
}
