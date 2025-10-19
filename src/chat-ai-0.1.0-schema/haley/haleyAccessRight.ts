import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessRight
 */
export class HaleyAccessRight extends VITAL_Node {
  public accessObjectTypes?: string[];


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccessRight';
  }

  /**
   * Get property definitions for HaleyAccessRight
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccessObjectTypes',
        tsPropertyName: 'accessObjectTypes',
        type: 'string[]',
        required: false
      }
    ];
  }


}
