import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionState
 */
export class HaleyInteractionState extends VITAL_Node {
  public haleyInteractionFlowStepInstanceURI?: string;
  public haleyState?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyInteractionState';
  }

  /**
   * Get property definitions for HaleyInteractionState
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyInteractionFlowStepInstanceURI',
        tsPropertyName: 'haleyInteractionFlowStepInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyState',
        tsPropertyName: 'haleyState',
        type: 'string',
        required: false
      }
    ];
  }


}
