import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasGenerativeMappedRowInstance
 */
export class Edge_hasGenerativeMappedRowInstance extends VITAL_PeerEdge {
  public haleyRowGenerativeMapping?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasGenerativeMappedRowInstance';
  }

  /**
   * Get property definitions for Edge_hasGenerativeMappedRowInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowGenerativeMapping',
        tsPropertyName: 'haleyRowGenerativeMapping',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasGenerativeMappedRowInstance
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasGenerativeMappedRowInstance';
  }
}
