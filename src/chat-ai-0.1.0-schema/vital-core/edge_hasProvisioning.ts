import { VITAL_TaxonomyEdge } from './vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#Edge_hasProvisioning
 */
export class Edge_hasProvisioning extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#Edge_hasProvisioning';
  }

  /**
   * Get property definitions for Edge_hasProvisioning
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasProvisioning
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-core#Edge_hasProvisioning';
  }
}
