import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Edge_hasEntitySet
 */
export class Edge_hasEntitySet extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Edge_hasEntitySet';
  }

  /**
   * Get property definitions for Edge_hasEntitySet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasEntitySet
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#Edge_hasEntitySet';
  }
}
