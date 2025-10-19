import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowInstance
 */
export class HaleyInteractionFlowInstance extends VITAL_Node {
  public haleyInteractionFlowURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowInstance';
  }

  /**
   * Get property definitions for HaleyInteractionFlowInstance
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
      }
    ];
  }


}
