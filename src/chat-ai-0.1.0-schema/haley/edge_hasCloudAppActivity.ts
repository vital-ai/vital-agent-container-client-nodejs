import { VITAL_PeerEdge } from '../vital-core/vitalPeeredge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#Edge_hasCloudAppActivity
 */
export class Edge_hasCloudAppActivity extends VITAL_PeerEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#Edge_hasCloudAppActivity';
  }

  /**
   * Get property definitions for Edge_hasCloudAppActivity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasCloudAppActivity
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#Edge_hasCloudAppActivity';
  }
}
