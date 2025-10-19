import { ProofTreeNode } from './proofTreeNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTreeDependencyNode
 */
export class ProofTreeDependencyNode extends ProofTreeNode {
  public proofJustificationGoal?: string;
  public proofJustificationIteration?: number;
  public proofTreeDependencyNodeOriginURIs?: string[];


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#ProofTreeDependencyNode';
  }

  /**
   * Get property definitions for ProofTreeDependencyNode
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
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofTreeDependencyNodeOriginURIs',
        tsPropertyName: 'proofTreeDependencyNodeOriginURIs',
        type: 'string[]',
        required: false
      }
    ];
  }


}
