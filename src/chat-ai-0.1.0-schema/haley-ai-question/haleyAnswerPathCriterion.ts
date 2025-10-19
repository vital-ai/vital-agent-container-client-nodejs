import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion
 */
export class HaleyAnswerPathCriterion extends VITAL_Node {
  public haleyRowRowTypeURI?: string;
  public haleyAnswerType?: string;
  public haleyGroupInstance?: string;
  public pathInstanceTaxonomyValue?: string;
  public pathInstanceUnknownValue?: string;
  public pathInstanceLongTextValue?: string;
  public haleyAnswerConstraintComparatorURI?: string;
  public haleyRowRowInstanceCounter?: string;
  public sourceProvenanceURI?: string;
  public pathInstanceTextValue?: string;
  public haleyGroup?: string;
  public pathInstanceDateTimeValue?: string | Date;
  public haleyRowTypeURI?: string;
  public pathInstanceIntegerValue?: number;
  public haleyQuerySubclassExpansion?: boolean;
  public pathInstanceMultiTaxonomyValue?: string[];
  public pathInstanceChoiceValue?: string;
  public pathInstanceMultiChoiceValue?: string[];
  public pathInstanceBooleanValue?: boolean;
  public pathInstanceDoubleValue?: number;
  public haleyRowInstanceCounter?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerPathCriterion';
  }

  /**
   * Get property definitions for HaleyAnswerPathCriterion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerConstraintComparatorURI',
        tsPropertyName: 'haleyAnswerConstraintComparatorURI',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isHaleyQuerySubclassExpansion',
        tsPropertyName: 'haleyQuerySubclassExpansion',
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
      }
    ];
  }


}
