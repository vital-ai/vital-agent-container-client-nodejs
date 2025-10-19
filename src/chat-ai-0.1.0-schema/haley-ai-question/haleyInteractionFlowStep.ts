import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStep
 */
export class HaleyInteractionFlowStep extends VITAL_Node {
  public haleyInteractionFlowURI?: string;
  public haleyInteractionFlowStepStateOptionURIs?: string[];


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStep';
  }

  /**
   * Get property definitions for HaleyInteractionFlowStep
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowURI',
        tsPropertyName: 'haleyInteractionFlowURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepStateOptionURIs',
        tsPropertyName: 'haleyInteractionFlowStepStateOptionURIs',
        type: 'string[]',
        required: false
      }
    ];
  }


}
