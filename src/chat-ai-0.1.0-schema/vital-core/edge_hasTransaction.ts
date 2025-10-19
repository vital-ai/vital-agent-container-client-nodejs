import { VITAL_TaxonomyEdge } from './vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasTransaction
 */
export class Edge_hasTransaction extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_hasTransaction';
  }

  /**
   * Get property definitions for Edge_hasTransaction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasTransaction
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasTransaction';
  }
}
