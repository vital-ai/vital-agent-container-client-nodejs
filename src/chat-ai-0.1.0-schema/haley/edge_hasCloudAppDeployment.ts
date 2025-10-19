import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasCloudAppDeployment
 */
export class Edge_hasCloudAppDeployment extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasCloudAppDeployment';
  }

  /**
   * Get property definitions for Edge_hasCloudAppDeployment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasCloudAppDeployment
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasCloudAppDeployment';
  }
}
