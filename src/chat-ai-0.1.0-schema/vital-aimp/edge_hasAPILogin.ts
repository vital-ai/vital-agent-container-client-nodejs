import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Edge_hasAPILogin
 */
export class Edge_hasAPILogin extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Edge_hasAPILogin';
  }

  /**
   * Get property definitions for Edge_hasAPILogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAPILogin
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#Edge_hasAPILogin';
  }
}
