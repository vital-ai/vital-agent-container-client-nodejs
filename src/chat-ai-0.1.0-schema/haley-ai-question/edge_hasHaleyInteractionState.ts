import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyInteractionState
 */
export class Edge_hasHaleyInteractionState extends VITAL_TaxonomyEdge {
  public currentHaleyInteractionState?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyInteractionState';
  }

  /**
   * Get property definitions for Edge_hasHaleyInteractionState
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isCurrentHaleyInteractionState',
        tsPropertyName: 'currentHaleyInteractionState',
        type: 'boolean',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasHaleyInteractionState
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/haley-ai-question#Edge_hasHaleyInteractionState';
  }
}
