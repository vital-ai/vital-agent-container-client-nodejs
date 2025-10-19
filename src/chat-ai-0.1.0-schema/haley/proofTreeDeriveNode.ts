import { ProofTreeNode } from './proofTreeNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTreeDeriveNode
 */
export class ProofTreeDeriveNode extends ProofTreeNode {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#ProofTreeDeriveNode';
  }

  /**
   * Get property definitions for ProofTreeDeriveNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
