import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance
 */
export class HaleyValidationPathInstance extends VITAL_Node {
  public proofTreeMembershipURI?: string;
  public haleyRowRowTypeURI?: string;
  public haleyAnswerType?: string;
  public haleyGroupInstance?: string;
  public pathInstanceUnknownValue?: string;
  public haleyAnswerInstance?: string;
  public availablePathInstanceUpperIntegerValue?: number;
  public validationPathScopeType?: string;
  public haleyRowRowInstanceCounter?: string;
  public sourceProvenanceURI?: string;
  public pathInstanceDateTimeValue?: string | Date;
  public availablePathInstanceUpperDoubleValue?: number;
  public availablePathInstanceChoiceValues?: string[];
  public validationPathType?: string;
  public availablePathInstanceLowerIntegerValue?: number;
  public pathInstanceChoiceValue?: string;
  public availablePathInstanceUpperDateTimeValue?: string | Date;
  public pathInstanceMultiChoiceValue?: string[];
  public validationPathInstanceMessage?: string;
  public pathInstanceBooleanValue?: boolean;
  public pathInstanceDoubleValue?: number;
  public haleyRowInstanceCounter?: string;
  public validationPathConstraintType?: string;
  public pathInstanceTaxonomyValue?: string;
  public availablePathInstanceTaxonomyURI?: string;
  public pathInstanceLongTextValue?: string;
  public haleyAnswerInstances?: string[];
  public availablePathInstanceMultiChoiceValues?: string[];
  public pathInstanceTextValue?: string;
  public haleyGroup?: string;
  public haleyRowTypeURI?: string;
  public pathInstanceIntegerValue?: number;
  public availablePathInstanceLowerDateTimeValue?: string | Date;
  public availablePathInstanceLowerDoubleValue?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyValidationPathInstance';
  }

  /**
   * Get property definitions for HaleyValidationPathInstance
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowTypeURI',
        tsPropertyName: 'haleyRowRowTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType',
        tsPropertyName: 'haleyAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstance',
        tsPropertyName: 'haleyGroupInstance',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceUnknownValue',
        tsPropertyName: 'pathInstanceUnknownValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstance',
        tsPropertyName: 'haleyAnswerInstance',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperIntegerValue',
        tsPropertyName: 'availablePathInstanceUpperIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasValidationPathScopeType',
        tsPropertyName: 'validationPathScopeType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowRowInstanceCounter',
        tsPropertyName: 'haleyRowRowInstanceCounter',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceProvenanceURI',
        tsPropertyName: 'sourceProvenanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceDateTimeValue',
        tsPropertyName: 'pathInstanceDateTimeValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperDoubleValue',
        tsPropertyName: 'availablePathInstanceUpperDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceChoiceValues',
        tsPropertyName: 'availablePathInstanceChoiceValues',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasValidationPathType',
        tsPropertyName: 'validationPathType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerIntegerValue',
        tsPropertyName: 'availablePathInstanceLowerIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceChoiceValue',
        tsPropertyName: 'pathInstanceChoiceValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceUpperDateTimeValue',
        tsPropertyName: 'availablePathInstanceUpperDateTimeValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiChoiceValue',
        tsPropertyName: 'pathInstanceMultiChoiceValue',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasValidationPathInstanceMessage',
        tsPropertyName: 'validationPathInstanceMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceBooleanValue',
        tsPropertyName: 'pathInstanceBooleanValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceDoubleValue',
        tsPropertyName: 'pathInstanceDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowInstanceCounter',
        tsPropertyName: 'haleyRowInstanceCounter',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasValidationPathConstraintType',
        tsPropertyName: 'validationPathConstraintType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceTaxonomyValue',
        tsPropertyName: 'pathInstanceTaxonomyValue',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceTaxonomyURI',
        tsPropertyName: 'availablePathInstanceTaxonomyURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceLongTextValue',
        tsPropertyName: 'pathInstanceLongTextValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerInstances',
        tsPropertyName: 'haleyAnswerInstances',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceMultiChoiceValues',
        tsPropertyName: 'availablePathInstanceMultiChoiceValues',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceTextValue',
        tsPropertyName: 'pathInstanceTextValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroup',
        tsPropertyName: 'haleyGroup',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyRowTypeURI',
        tsPropertyName: 'haleyRowTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceIntegerValue',
        tsPropertyName: 'pathInstanceIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerDateTimeValue',
        tsPropertyName: 'availablePathInstanceLowerDateTimeValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAvailablePathInstanceLowerDoubleValue',
        tsPropertyName: 'availablePathInstanceLowerDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
