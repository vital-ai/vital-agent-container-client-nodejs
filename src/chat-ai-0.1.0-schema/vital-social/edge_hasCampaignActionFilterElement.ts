import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasCampaignActionFilterElement
 */
export class Edge_hasCampaignActionFilterElement extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#Edge_hasCampaignActionFilterElement';
  }

  /**
   * Get property definitions for Edge_hasCampaignActionFilterElement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasCampaignActionFilterElement
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasCampaignActionFilterElement';
  }
}
