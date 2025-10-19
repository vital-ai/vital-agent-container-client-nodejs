import { HyperEdge_hasHyperAnnotation } from './hyperEdge_hasHyperAnnotation';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#HyperEdge_hasReason
 */
export class HyperEdge_hasReason extends HyperEdge_hasHyperAnnotation {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#HyperEdge_hasReason';
  }

  /**
   * Get property definitions for HyperEdge_hasReason
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasReason
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital#HyperEdge_hasReason';
  }
}
