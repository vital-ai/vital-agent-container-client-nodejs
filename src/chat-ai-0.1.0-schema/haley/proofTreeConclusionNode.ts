import { ProofTreeNode } from './proofTreeNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTreeConclusionNode
 */
export class ProofTreeConclusionNode extends ProofTreeNode {
  public proofTertiaryGoalURI?: string;
  public proofConclusionExplanation?: string;
  public proofDecisionURI?: string;
  public proofPrimaryGoalURI?: string;
  public proofAnswerTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#ProofTreeConclusionNode';
  }

  /**
   * Get property definitions for ProofTreeConclusionNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofTertiaryGoalURI',
        tsPropertyName: 'proofTertiaryGoalURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofConclusionExplanation',
        tsPropertyName: 'proofConclusionExplanation',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofDecisionURI',
        tsPropertyName: 'proofDecisionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofPrimaryGoalURI',
        tsPropertyName: 'proofPrimaryGoalURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofAnswerTypeURI',
        tsPropertyName: 'proofAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
