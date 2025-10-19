import { VITAL_Edge } from './vitalEdge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge
 */
export class VITAL_TaxonomyEdge extends VITAL_Edge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge';
  }

  /**
   * Get property definitions for VITAL_TaxonomyEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for VITAL_TaxonomyEdge
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#VITAL_TaxonomyEdge';
  }
}
