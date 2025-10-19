import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyMappingFunction
 */
export class HaleyMappingFunction extends VITAL_Node {
  public mappingFunctionArityType?: string;
  public inputHaleyAnswerType?: string;
  public outputHaleyAnswerType?: string;
  public outputHaleyAnswerUnitType?: string;
  public inputHaleyAnswerUnitType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyMappingFunction';
  }

  /**
   * Get property definitions for HaleyMappingFunction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasMappingFunctionArityType',
        tsPropertyName: 'mappingFunctionArityType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInputHaleyAnswerType',
        tsPropertyName: 'inputHaleyAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOutputHaleyAnswerType',
        tsPropertyName: 'outputHaleyAnswerType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasOutputHaleyAnswerUnitType',
        tsPropertyName: 'outputHaleyAnswerUnitType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasInputHaleyAnswerUnitType',
        tsPropertyName: 'inputHaleyAnswerUnitType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
