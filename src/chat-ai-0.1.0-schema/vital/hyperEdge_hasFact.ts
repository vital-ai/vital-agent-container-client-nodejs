import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#HyperEdge_hasFact
 */
export class HyperEdge_hasFact extends VITAL_HyperEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#HyperEdge_hasFact';
  }

  /**
   * Get property definitions for HyperEdge_hasFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasFact
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital#HyperEdge_hasFact';
  }
}
