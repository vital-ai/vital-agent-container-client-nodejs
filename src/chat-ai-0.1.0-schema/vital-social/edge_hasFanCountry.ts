import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasFanCountry
 */
export class Edge_hasFanCountry extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#Edge_hasFanCountry';
  }

  /**
   * Get property definitions for Edge_hasFanCountry
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasFanCountry
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasFanCountry';
  }
}
