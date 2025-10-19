import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EntitySet
 */
export class EntitySet extends VITAL_Node {
  public globalEntitySet?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EntitySet';
  }

  /**
   * Get property definitions for EntitySet
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalEntitySet',
        tsPropertyName: 'globalEntitySet',
        type: 'boolean',
        required: false
      }
    ];
  }


}
