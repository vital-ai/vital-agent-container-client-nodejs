import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#Edge_hasUserSession
 */
export class Edge_hasUserSession extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#Edge_hasUserSession';
  }

  /**
   * Get property definitions for Edge_hasUserSession
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasUserSession
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital#Edge_hasUserSession';
  }
}
