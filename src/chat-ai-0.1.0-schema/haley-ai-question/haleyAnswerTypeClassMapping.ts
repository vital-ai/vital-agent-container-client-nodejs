import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping
 */
export class HaleyAnswerTypeClassMapping extends VITAL_Node {
  public mappedConstantStringValue?: string;
  public haleyMappingTypeURI?: string;
  public haleyMappingFunctionURI?: string;
  public mappedAnswerTypeURI?: string;
  public answerTypePropertyValueConstraintString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerTypeClassMapping';
  }

  /**
   * Get property definitions for HaleyAnswerTypeClassMapping
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMappedConstantStringValue',
        tsPropertyName: 'mappedConstantStringValue',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyMappingFunctionURI',
        tsPropertyName: 'haleyMappingFunctionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMappedAnswerTypeURI',
        tsPropertyName: 'mappedAnswerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypePropertyValueConstraintString',
        tsPropertyName: 'answerTypePropertyValueConstraintString',
        type: 'string',
        required: false
      }
    ];
  }


}
