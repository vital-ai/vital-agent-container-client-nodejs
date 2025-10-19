import { VitalOntObject } from './vitalOntObject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalOntHyperNode
 */
export class VitalOntHyperNode extends VitalOntObject {
  public vitalOntHyperNodeType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#VitalOntHyperNode';
  }

  /**
   * Get property definitions for VitalOntHyperNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntHyperNodeType',
        tsPropertyName: 'vitalOntHyperNodeType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
