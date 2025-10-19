import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_PayloadNode
 */
export class VITAL_PayloadNode extends VITAL_Node {
  public serializedRDF?: string;
  public serializedJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_PayloadNode';
  }

  /**
   * Get property definitions for VITAL_PayloadNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSerializedRDF',
        tsPropertyName: 'serializedRDF',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSerializedJSON',
        tsPropertyName: 'serializedJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
