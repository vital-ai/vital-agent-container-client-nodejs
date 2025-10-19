import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Entity
 */
export class Entity extends VITAL_Node {
  public entitySetURI?: string[];


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Entity';
  }

  /**
   * Get property definitions for Entity
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEntitySetURI',
        tsPropertyName: 'entitySetURI',
        type: 'string[]',
        required: false
      }
    ];
  }


}
