import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatQuotaTransactionStage
 */
export class Edge_hasHaleyChatQuotaTransactionStage extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatQuotaTransactionStage';
  }

  /**
   * Get property definitions for Edge_hasHaleyChatQuotaTransactionStage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyChatQuotaTransactionStage
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/chat-ai#Edge_hasHaleyChatQuotaTransactionStage';
  }
}
