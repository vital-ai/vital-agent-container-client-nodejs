import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasSocialLocation
 */
export class Edge_hasSocialLocation extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#Edge_hasSocialLocation';
  }

  /**
   * Get property definitions for Edge_hasSocialLocation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSocialLocation
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasSocialLocation';
  }
}
