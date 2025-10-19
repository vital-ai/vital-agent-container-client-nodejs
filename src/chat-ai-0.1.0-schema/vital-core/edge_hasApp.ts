import { VITAL_TaxonomyEdge } from './vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasApp
 */
export class Edge_hasApp extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_hasApp';
  }

  /**
   * Get property definitions for Edge_hasApp
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasApp
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasApp';
  }
}
