import { Edge_hasBusinessRelationshipWith } from '../vital-aimp/edge_hasBusinessRelationshipWith';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasAgentInstallationWith
 */
export class Edge_hasAgentInstallationWith extends Edge_hasBusinessRelationshipWith {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasAgentInstallationWith';
  }

  /**
   * Get property definitions for Edge_hasAgentInstallationWith
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasAgentInstallationWith
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasAgentInstallationWith';
  }
}
