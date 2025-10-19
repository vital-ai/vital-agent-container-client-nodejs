import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepActionInstance
 */
export class HaleyInteractionFlowStepActionInstance extends VITAL_Node {
  public haleyInteractionFlowStepActionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepActionInstance';
  }

  /**
   * Get property definitions for HaleyInteractionFlowStepActionInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepActionURI',
        tsPropertyName: 'haleyInteractionFlowStepActionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
