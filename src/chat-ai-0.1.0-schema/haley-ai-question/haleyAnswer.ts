import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswer
 */
export class HaleyAnswer extends VITAL_Node {
  public haleyMappedAnswerType?: string;
  public aggregrationQuestionURI?: string;
  public subjectToValidation?: boolean;
  public subjectToConstraints?: boolean;
  public dynamicRequiredAnswer?: boolean;
  public readOnlyAnswerValue?: boolean;
  public haleyAnswerType?: string;
  public haleyAnswerDataType?: string;
  public calculatedAnswerValue?: boolean;
  public haleyAnswerUnitType?: string;
  public aggregationType?: string;
  public aggregationRowURI?: string;
  public aggregationAnswer?: boolean;
  public preferredSelectorType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswer';
  }

  /**
   * Get property definitions for HaleyAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappedAnswerType',
        tsPropertyName: 'haleyMappedAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregrationQuestionURI',
        tsPropertyName: 'aggregrationQuestionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSubjectToValidation',
        tsPropertyName: 'subjectToValidation',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isSubjectToConstraints',
        tsPropertyName: 'subjectToConstraints',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isDynamicRequiredAnswer',
        tsPropertyName: 'dynamicRequiredAnswer',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isReadOnlyAnswerValue',
        tsPropertyName: 'readOnlyAnswerValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerType',
        tsPropertyName: 'haleyAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerDataType',
        tsPropertyName: 'haleyAnswerDataType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isCalculatedAnswerValue',
        tsPropertyName: 'calculatedAnswerValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerUnitType',
        tsPropertyName: 'haleyAnswerUnitType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationType',
        tsPropertyName: 'aggregationType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAggregationRowURI',
        tsPropertyName: 'aggregationRowURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isAggregationAnswer',
        tsPropertyName: 'aggregationAnswer',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasPreferredSelectorType',
        tsPropertyName: 'preferredSelectorType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
