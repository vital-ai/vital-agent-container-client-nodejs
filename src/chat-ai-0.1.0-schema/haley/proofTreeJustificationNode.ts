import { ProofTreeNode } from './proofTreeNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTreeJustificationNode
 */
export class ProofTreeJustificationNode extends ProofTreeNode {
  public finalJustification?: boolean;
  public proofJustificationRuleIdentifier?: string;
  public proofJustificationGoal?: string;
  public proofJustificationTypeURI?: string;
  public proofJustificationResult?: boolean;
  public proofJustificationRuleMessage?: string;
  public proofJustificationAnswerTypeURI?: string;
  public proofJustificationIteration?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#ProofTreeJustificationNode';
  }

  /**
   * Get property definitions for ProofTreeJustificationNode
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#isFinalJustification',
        tsPropertyName: 'finalJustification',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationRuleIdentifier',
        tsPropertyName: 'proofJustificationRuleIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationGoal',
        tsPropertyName: 'proofJustificationGoal',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationTypeURI',
        tsPropertyName: 'proofJustificationTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationResult',
        tsPropertyName: 'proofJustificationResult',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationRuleMessage',
        tsPropertyName: 'proofJustificationRuleMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationAnswerTypeURI',
        tsPropertyName: 'proofJustificationAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
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
