import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstanceRequest
 */
export class HaleyInteractionFlowStepInstanceRequest extends VITAL_Node {
  public interactionFlowStepCommandRequestURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepInstanceRequest';
  }

  /**
   * Get property definitions for HaleyInteractionFlowStepInstanceRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInteractionFlowStepCommandRequestURI',
        tsPropertyName: 'interactionFlowStepCommandRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
