import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatBillingAddress
 */
export class Edge_hasHaleyChatBillingAddress extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatBillingAddress';
  }

  /**
   * Get property definitions for Edge_hasHaleyChatBillingAddress
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyChatBillingAddress
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatBillingAddress';
  }
}
