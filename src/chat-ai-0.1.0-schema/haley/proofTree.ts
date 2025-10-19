import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofTree
 */
export class ProofTree extends VITAL_Node {
  public proofTreeMembershipURI?: string;
  public proofConclusionExplanation?: string;
  public proofAnswerTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#ProofTree';
  }

  /**
   * Get property definitions for ProofTree
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
        propertyURI: 'http://vital.ai/ontology/haley#hasProofConclusionExplanation',
        tsPropertyName: 'proofConclusionExplanation',
        type: 'string',
        required: false
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
