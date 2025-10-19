import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Edge_hasAccountOpportunityMemberInvitation
 */
export class Edge_hasAccountOpportunityMemberInvitation extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Edge_hasAccountOpportunityMemberInvitation';
  }

  /**
   * Get property definitions for Edge_hasAccountOpportunityMemberInvitation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAccountOpportunityMemberInvitation
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#Edge_hasAccountOpportunityMemberInvitation';
  }
}
