import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTreeNode
 */
export class ProofTreeNode extends VITAL_Node {
  public proofTreeMembershipURI?: string;
  public proofTreeAskNodeOriginURIs?: string;
  public proofTreeRuleName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#ProofTreeNode';
  }

  /**
   * Get property definitions for ProofTreeNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasProofTreeMembershipURI',
        tsPropertyName: 'proofTreeMembershipURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofTreeAskNodeOriginURIs',
        tsPropertyName: 'proofTreeAskNodeOriginURIs',
        type: 'http://vital.ai/ontology/haley#ProofTreeDeriveNode | http://vital.ai/ontology/haley#ProofTreeJustificationNode | http://vital.ai/ontology/haley#ProofTreeAncestorNode | http://vital.ai/ontology/haley#ProofTreeDependencyNode[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofTreeRuleName',
        tsPropertyName: 'proofTreeRuleName',
        type: 'string',
        required: false
      }
    ];
  }


}
