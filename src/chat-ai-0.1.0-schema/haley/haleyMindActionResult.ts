import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindActionResult
 */
export class HaleyMindActionResult extends VITAL_Node {
  public haleyMindActionResultTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindActionResult';
  }

  /**
   * Get property definitions for HaleyMindActionResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyMindActionResultTypeURI',
        tsPropertyName: 'haleyMindActionResultTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
