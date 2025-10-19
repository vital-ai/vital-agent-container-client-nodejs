import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyAccessRightGraphObject
 */
export class Edge_hasHaleyAccessRightGraphObject extends VITAL_PeerEdge {
  public haleyAccessRightMessageDirectionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessRightGraphObject';
  }

  /**
   * Get property definitions for Edge_hasHaleyAccessRightGraphObject
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
   * Get the VitalSigns type URI for Edge_hasHaleyAccessRightGraphObject
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessRightGraphObject';
  }
}
