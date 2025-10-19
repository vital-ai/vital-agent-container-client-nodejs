import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#Edge_hasFeatureValue
 */
export class Edge_hasFeatureValue extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#Edge_hasFeatureValue';
  }

  /**
   * Get property definitions for Edge_hasFeatureValue
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasFeatureValue
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-ml#Edge_hasFeatureValue';
  }
}
