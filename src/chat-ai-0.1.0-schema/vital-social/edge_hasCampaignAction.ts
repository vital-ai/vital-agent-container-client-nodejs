import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasCampaignAction
 */
export class Edge_hasCampaignAction extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#Edge_hasCampaignAction';
  }

  /**
   * Get property definitions for Edge_hasCampaignAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasCampaignAction
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasCampaignAction';
  }
}
