import { ProofTreeNode } from './proofTreeNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTreeAncestorNode
 */
export class ProofTreeAncestorNode extends ProofTreeNode {
  public proofJustificationGoal?: string;
  public proofJustificationIteration?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#ProofTreeAncestorNode';
  }

  /**
   * Get property definitions for ProofTreeAncestorNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationGoal',
        tsPropertyName: 'proofJustificationGoal',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationIteration',
        tsPropertyName: 'proofJustificationIteration',
        type: 'number',
        required: false
      }
    ];
  }


}
