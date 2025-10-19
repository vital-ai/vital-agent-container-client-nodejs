import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasCloudAppLimits
 */
export class Edge_hasCloudAppLimits extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasCloudAppLimits';
  }

  /**
   * Get property definitions for Edge_hasCloudAppLimits
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasCloudAppLimits
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasCloudAppLimits';
  }
}
