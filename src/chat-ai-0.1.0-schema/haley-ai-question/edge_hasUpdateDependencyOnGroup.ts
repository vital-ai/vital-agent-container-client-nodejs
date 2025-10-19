import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasUpdateDependencyOnGroup
 */
export class Edge_hasUpdateDependencyOnGroup extends VITAL_PeerEdge {
  public updatePrecedence?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasUpdateDependencyOnGroup';
  }

  /**
   * Get property definitions for Edge_hasUpdateDependencyOnGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasUpdatePrecedence',
        tsPropertyName: 'updatePrecedence',
        type: 'number',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasUpdateDependencyOnGroup
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasUpdateDependencyOnGroup';
  }
}
