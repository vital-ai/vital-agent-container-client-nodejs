import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasCampaignActionDocument
 */
export class Edge_hasCampaignActionDocument extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#Edge_hasCampaignActionDocument';
  }

  /**
   * Get property definitions for Edge_hasCampaignActionDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasCampaignActionDocument
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasCampaignActionDocument';
  }
}
