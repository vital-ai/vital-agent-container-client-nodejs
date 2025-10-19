import { VITAL_TaxonomyEdge } from './vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasOrganization
 */
export class Edge_hasOrganization extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_hasOrganization';
  }

  /**
   * Get property definitions for Edge_hasOrganization
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasOrganization
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasOrganization';
  }
}
