import { VitalOntObject } from './vitalOntObject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalOntHyperEdge
 */
export class VitalOntHyperEdge extends VitalOntObject {
  public vitalOntHyperEdgeType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#VitalOntHyperEdge';
  }

  /**
   * Get property definitions for VitalOntHyperEdge
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntHyperEdgeType',
        tsPropertyName: 'vitalOntHyperEdgeType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
