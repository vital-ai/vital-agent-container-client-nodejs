import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatPublicProfile
 */
export class Edge_hasHaleyChatPublicProfile extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatPublicProfile';
  }

  /**
   * Get property definitions for Edge_hasHaleyChatPublicProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyChatPublicProfile
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatPublicProfile';
  }
}
