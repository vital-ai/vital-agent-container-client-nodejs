import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalAuthKey
 */
export class VitalAuthKey extends VITAL_Node {
  public key?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalAuthKey';
  }

  /**
   * Get property definitions for VitalAuthKey
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasKey',
        tsPropertyName: 'key',
        type: 'string',
        required: false
      }
    ];
  }


}
