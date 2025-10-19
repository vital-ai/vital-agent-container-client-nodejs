import { VitalOntObject } from './vitalOntObject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalOntNode
 */
export class VitalOntNode extends VitalOntObject {
  public vitalOntDataType?: string;
  public vitalOntNodeType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#VitalOntNode';
  }

  /**
   * Get property definitions for VitalOntNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntDataType',
        tsPropertyName: 'vitalOntDataType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalOntNodeType',
        tsPropertyName: 'vitalOntNodeType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
