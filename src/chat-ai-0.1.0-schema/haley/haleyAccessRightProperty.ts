import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessRightProperty
 */
export class HaleyAccessRightProperty extends VITAL_Node {
  public haleyAccessRightTypeURI?: string;
  public haleyAccessRightRuleTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccessRightProperty';
  }

  /**
   * Get property definitions for HaleyAccessRightProperty
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyAccessRightTypeURI',
        tsPropertyName: 'haleyAccessRightTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyAccessRightRuleTypeURI',
        tsPropertyName: 'haleyAccessRightRuleTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
