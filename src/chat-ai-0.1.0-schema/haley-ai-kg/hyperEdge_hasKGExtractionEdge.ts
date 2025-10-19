import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#HyperEdge_hasKGExtractionEdge
 */
export class HyperEdge_hasKGExtractionEdge extends VITAL_HyperEdge {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#HyperEdge_hasKGExtractionEdge';
  }

  /**
   * Get property definitions for HyperEdge_hasKGExtractionEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasKGExtractionEdge
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-kg#HyperEdge_hasKGExtractionEdge';
  }
}
