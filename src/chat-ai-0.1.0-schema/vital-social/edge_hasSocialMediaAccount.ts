import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasSocialMediaAccount
 */
export class Edge_hasSocialMediaAccount extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#Edge_hasSocialMediaAccount';
  }

  /**
   * Get property definitions for Edge_hasSocialMediaAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSocialMediaAccount
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasSocialMediaAccount';
  }
}
