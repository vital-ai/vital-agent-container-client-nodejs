import { VITAL_TaxonomyEdge } from '../vital-core/vitalTaxonomyedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Edge_hasSessionChannel
 */
export class Edge_hasSessionChannel extends VITAL_TaxonomyEdge {
  public lastActivityTime?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Edge_hasSessionChannel';
  }

  /**
   * Get property definitions for Edge_hasSessionChannel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastActivityTime',
        tsPropertyName: 'lastActivityTime',
        type: 'number',
        required: false
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for Edge_hasSessionChannel
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#Edge_hasSessionChannel';
  }
}
