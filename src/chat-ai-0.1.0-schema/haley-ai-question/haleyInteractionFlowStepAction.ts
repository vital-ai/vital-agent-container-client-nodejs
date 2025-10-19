import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepAction
 */
export class HaleyInteractionFlowStepAction extends VITAL_Node {
  public actionWithCommitment?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyInteractionFlowStepAction';
  }

  /**
   * Get property definitions for HaleyInteractionFlowStepAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActionWithCommitment',
        tsPropertyName: 'actionWithCommitment',
        type: 'boolean',
        required: false
      }
    ];
  }


}
