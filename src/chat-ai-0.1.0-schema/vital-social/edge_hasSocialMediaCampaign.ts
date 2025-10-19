import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-social#Edge_hasSocialMediaCampaign
 */
export class Edge_hasSocialMediaCampaign extends VITAL_TaxonomyEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-social#Edge_hasSocialMediaCampaign';
  }

  /**
   * Get property definitions for Edge_hasSocialMediaCampaign
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSocialMediaCampaign
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-social#Edge_hasSocialMediaCampaign';
  }
}
