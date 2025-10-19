import { VITAL_TaxonomyEdge } from './vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasChildCategory
 */
export class Edge_hasChildCategory extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_hasChildCategory';
  }

  /**
   * Get property definitions for Edge_hasChildCategory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasChildCategory
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasChildCategory';
  }
}
