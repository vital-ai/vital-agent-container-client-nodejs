import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Edge_hasAnonymousLogin
 */
export class Edge_hasAnonymousLogin extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Edge_hasAnonymousLogin';
  }

  /**
   * Get property definitions for Edge_hasAnonymousLogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAnonymousLogin
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#Edge_hasAnonymousLogin';
  }
}
