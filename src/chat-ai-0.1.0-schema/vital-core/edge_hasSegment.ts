import { VITAL_TaxonomyEdge } from './vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasSegment
 */
export class Edge_hasSegment extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_hasSegment';
  }

  /**
   * Get property definitions for Edge_hasSegment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSegment
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasSegment';
  }
}
