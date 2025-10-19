import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance
 */
export class HaleyAnswerPathInstance extends VITAL_Node {
  public proofTreeMembershipURI?: string;
  public haleyRowRowTypeURI?: string;
  public haleyAnswerType?: string;
  public answerPathInstanceModifiedTimestamp?: string | Date;
  public haleyGroupInstance?: string;
  public pathInstanceTaxonomyValue?: string;
  public pathInstanceUnknownValue?: string;
  public pathInstanceLongTextValue?: string;
  public pathInstanceEnabled?: boolean;
  public pathInstanceNewEnabled?: boolean;
  public haleyRowRowInstanceCounter?: string;
  public sourceProvenanceURI?: string;
  public pathInstanceTextValue?: string;
  public haleyGroup?: string;
  public pathInstanceDateTimeValue?: string | Date;
  public haleyRowTypeURI?: string;
  public pathInstanceIntegerValue?: number;
  public answerPathProofIteration?: number;
  public pathInstanceEphemeralValue?: boolean;
  public pathInstanceMultiTaxonomyValue?: string[];
  public pathInstanceChoiceValue?: string;
  public pathInstanceMultiChoiceValue?: string[];
  public answerPathKeyName?: string;
  public pathInstanceBooleanValue?: boolean;
  public answerPathInstanceModified?: boolean;
  public pathInstanceDoubleValue?: number;
  public haleyRowInstanceCounter?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathInstance';
  }

  /**
   * Get property definitions for HaleyAnswerPathInstance
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerPathInstanceModifiedTimestamp',
        tsPropertyName: 'answerPathInstanceModifiedTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupInstance',
        tsPropertyName: 'haleyGroupInstance',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceUnknownValue',
        tsPropertyName: 'pathInstanceUnknownValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceLongTextValue',
        tsPropertyName: 'pathInstanceLongTextValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isPathInstanceEnabled',
        tsPropertyName: 'pathInstanceEnabled',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isPathInstanceNewEnabled',
        tsPropertyName: 'pathInstanceNewEnabled',
        type: 'boolean',
        required: false
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceDateTimeValue',
        tsPropertyName: 'pathInstanceDateTimeValue',
        type: 'string',
        required: false,
        format: 'date-time'
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerPathProofIteration',
        tsPropertyName: 'answerPathProofIteration',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isPathInstanceEphemeralValue',
        tsPropertyName: 'pathInstanceEphemeralValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiTaxonomyValue',
        tsPropertyName: 'pathInstanceMultiTaxonomyValue',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceChoiceValue',
        tsPropertyName: 'pathInstanceChoiceValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPathInstanceMultiChoiceValue',
        tsPropertyName: 'pathInstanceMultiChoiceValue',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerPathKeyName',
        tsPropertyName: 'answerPathKeyName',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAnswerPathInstanceModified',
        tsPropertyName: 'answerPathInstanceModified',
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
      }
    ];
  }


}
