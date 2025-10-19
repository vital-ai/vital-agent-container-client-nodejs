import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping
 */
export class HaleyAnswerTypeMapping extends VITAL_Node {
  public sourceConditionalUpperIntegerValue?: number;
  public sourceConditionalDateValue?: string | Date;
  public haleyMappingFunctionURI?: string;
  public destinationConditionalBooleanValue?: boolean;
  public destinationConditionalDoubleValue?: number;
  public mappingComparableType?: string;
  public destinationConditionalStringValue?: string;
  public haleyMappingTypeURI?: string;
  public sourceConditionalIntegerValue?: number;
  public sourceConditionalStringValue?: string;
  public sourceConditionalUpperDoubleValue?: number;
  public destinationConditionalIntegerValue?: number;
  public sourceConditionalLongValue?: number;
  public sourceConditionalUpperDateValue?: string | Date;
  public sourceConditionalUpperLongValue?: number;
  public sourceConditionalDoubleValue?: number;
  public destinationConditionalLongValue?: number;
  public sourceConditionalUpperStringValue?: string;
  public destinationConditionalDateValue?: string | Date;
  public destinationMappedAnswerTypeURI?: string;
  public sourceConditionalBooleanValue?: boolean;
  public sourceMappedAnswerTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeMapping';
  }

  /**
   * Get property definitions for HaleyAnswerTypeMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperIntegerValue',
        tsPropertyName: 'sourceConditionalUpperIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalDateValue',
        tsPropertyName: 'sourceConditionalDateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappingFunctionURI',
        tsPropertyName: 'haleyMappingFunctionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalBooleanValue',
        tsPropertyName: 'destinationConditionalBooleanValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalDoubleValue',
        tsPropertyName: 'destinationConditionalDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMappingComparableType',
        tsPropertyName: 'mappingComparableType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalStringValue',
        tsPropertyName: 'destinationConditionalStringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappingTypeURI',
        tsPropertyName: 'haleyMappingTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalIntegerValue',
        tsPropertyName: 'sourceConditionalIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalStringValue',
        tsPropertyName: 'sourceConditionalStringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperDoubleValue',
        tsPropertyName: 'sourceConditionalUpperDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalIntegerValue',
        tsPropertyName: 'destinationConditionalIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalLongValue',
        tsPropertyName: 'sourceConditionalLongValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperDateValue',
        tsPropertyName: 'sourceConditionalUpperDateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperLongValue',
        tsPropertyName: 'sourceConditionalUpperLongValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalDoubleValue',
        tsPropertyName: 'sourceConditionalDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalLongValue',
        tsPropertyName: 'destinationConditionalLongValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalUpperStringValue',
        tsPropertyName: 'sourceConditionalUpperStringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationConditionalDateValue',
        tsPropertyName: 'destinationConditionalDateValue',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasDestinationMappedAnswerTypeURI',
        tsPropertyName: 'destinationMappedAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceConditionalBooleanValue',
        tsPropertyName: 'sourceConditionalBooleanValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSourceMappedAnswerTypeURI',
        tsPropertyName: 'sourceMappedAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
