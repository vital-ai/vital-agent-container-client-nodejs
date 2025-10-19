import { VITAL_TaxonomyEdge } from './vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasAuthKey
 */
export class Edge_hasAuthKey extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_hasAuthKey';
  }

  /**
   * Get property definitions for Edge_hasAuthKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAuthKey
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasAuthKey';
  }
}
