import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyAccessRightMessage
 */
export class Edge_hasHaleyAccessRightMessage extends VITAL_PeerEdge {
  public haleyAccessRightMessageDirectionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessRightMessage';
  }

  /**
   * Get property definitions for Edge_hasHaleyAccessRightMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyAccessRightMessageDirectionURI',
        tsPropertyName: 'haleyAccessRightMessageDirectionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyAccessRightMessage
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessRightMessage';
  }
}
