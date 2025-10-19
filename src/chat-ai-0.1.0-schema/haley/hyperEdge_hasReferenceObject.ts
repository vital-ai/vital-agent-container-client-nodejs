import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HyperEdge_hasReferenceObject
 */
export class HyperEdge_hasReferenceObject extends VITAL_HyperEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HyperEdge_hasReferenceObject';
  }

  /**
   * Get property definitions for HyperEdge_hasReferenceObject
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasReferenceObject
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley#HyperEdge_hasReferenceObject';
  }
}
