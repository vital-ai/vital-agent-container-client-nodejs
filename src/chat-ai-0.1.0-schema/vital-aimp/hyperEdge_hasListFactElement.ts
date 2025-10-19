import { VITAL_HyperEdge } from '../vital-core/vitalHyperedge';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HyperEdge_hasListFactElement
 */
export class HyperEdge_hasListFactElement extends VITAL_HyperEdge {
  public score?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasListFactElement';
  }

  /**
   * Get property definitions for HyperEdge_hasListFactElement
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasScore',
        tsPropertyName: 'score',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


  /**
   * Get the VitalSigns type URI for HyperEdge_hasListFactElement
   */
  static getVitalType(): string {
    return 'http://vital.ai/ontology/vital-aimp#HyperEdge_hasListFactElement';
  }
}
