import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasHaleyAccessRight
 */
export class Edge_hasHaleyAccessRight extends VITAL_PeerEdge {
  public roleGrantAspectURI?: string;
  public roleGrantTypeURI?: string;
  public roleGrantExtentURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessRight';
  }

  /**
   * Get property definitions for Edge_hasHaleyAccessRight
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRoleGrantAspectURI',
        tsPropertyName: 'roleGrantAspectURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRoleGrantTypeURI',
        tsPropertyName: 'roleGrantTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasRoleGrantExtentURI',
        tsPropertyName: 'roleGrantExtentURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyAccessRight
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasHaleyAccessRight';
  }
}
