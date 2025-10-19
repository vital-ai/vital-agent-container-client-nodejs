import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#ProofJustificationReason
 */
export class ProofJustificationReason extends VITAL_Node {
  public proofTreeMembershipURI?: string;
  public proofReasonResult?: boolean;
  public reasonConstraintFunctionName?: string;
  public reasonEncoding?: string;
  public proofJustificationRuleIdentifier?: string;
  public proofJustificationGoal?: string;
  public proofJustificationReasonTypeURI?: string;
  public reasonComparatorTypeURI?: string;
  public reasonConstraintKeyName?: string;
  public reasonConstraintValue?: string;
  public reasonConstraintValueTaxonomyURI?: string;
  public reasonParse?: string[];
  public reasonProvenanceURI?: string;
  public reasonConstraintInputValue?: string;
  public reasonConstraintValueDescription?: string;
  public reasonConstraintValueSetURI?: string;
  public reasonConstraintAnswerInstanceURI?: string;
  public reasonReferenceTimestamp?: string | Date;
  public proofJustificationIteration?: number;
  public reasonConstraintMLModelName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#ProofJustificationReason';
  }

  /**
   * Get property definitions for ProofJustificationReason
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
        propertyURI: 'http://vital.ai/ontology/haley#hasProofReasonResult',
        tsPropertyName: 'proofReasonResult',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonConstraintFunctionName',
        tsPropertyName: 'reasonConstraintFunctionName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonEncoding',
        tsPropertyName: 'reasonEncoding',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationReasonTypeURI',
        tsPropertyName: 'proofJustificationReasonTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonComparatorTypeURI',
        tsPropertyName: 'reasonComparatorTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonConstraintKeyName',
        tsPropertyName: 'reasonConstraintKeyName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonConstraintValue',
        tsPropertyName: 'reasonConstraintValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasReasonConstraintValueTaxonomyURI',
        tsPropertyName: 'reasonConstraintValueTaxonomyURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonParse',
        tsPropertyName: 'reasonParse',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonProvenanceURI',
        tsPropertyName: 'reasonProvenanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonConstraintInputValue',
        tsPropertyName: 'reasonConstraintInputValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonConstraintValueDescription',
        tsPropertyName: 'reasonConstraintValueDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasReasonConstraintValueSetURI',
        tsPropertyName: 'reasonConstraintValueSetURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasReasonConstraintAnswerInstanceURI',
        tsPropertyName: 'reasonConstraintAnswerInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonReferenceTimestamp',
        tsPropertyName: 'reasonReferenceTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasProofJustificationIteration',
        tsPropertyName: 'proofJustificationIteration',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasReasonConstraintMLModelName',
        tsPropertyName: 'reasonConstraintMLModelName',
        type: 'string',
        required: false
      }
    ];
  }


}
