import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Edge_hasSmsLogin
 */
export class Edge_hasSmsLogin extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Edge_hasSmsLogin';
  }

  /**
   * Get property definitions for Edge_hasSmsLogin
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSmsLogin
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#Edge_hasSmsLogin';
  }
}
