import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupMappingAction
 */
export class HaleyGroupMappingAction extends VITAL_Node {
  public haleyGroupMappingActionType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyGroupMappingAction';
  }

  /**
   * Get property definitions for HaleyGroupMappingAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupMappingActionType',
        tsPropertyName: 'haleyGroupMappingActionType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
