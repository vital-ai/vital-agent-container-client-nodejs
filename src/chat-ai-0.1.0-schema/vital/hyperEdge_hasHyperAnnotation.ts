import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#HyperEdge_hasHyperAnnotation
 */
export class HyperEdge_hasHyperAnnotation extends VITAL_HyperEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#HyperEdge_hasHyperAnnotation';
  }

  /**
   * Get property definitions for HyperEdge_hasHyperAnnotation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasHyperAnnotation
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital#HyperEdge_hasHyperAnnotation';
  }
}
