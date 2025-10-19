import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyAnswerType
 */
export class HaleyAnswerType extends VITAL_Node {
  public answerTypeExernalVersion?: string;
  public answerTypeVersion?: string;
  public haleyAnswerUnitType?: string;
  public haleyAnswerDataType?: string;
  public answerTypeUseStartDate?: string | Date;
  public activeAnswerType?: boolean;
  public haleyCurrencyType?: string;
  public answerTypeUseEndDate?: string | Date;
  public haleyAnswerTypeCategory?: string;
  public answerTypeIdentifier?: string;
  public description?: string;
  public featureType?: string;
  public rootAnswerType?: boolean;
  public answerTypeExternalIdentifier?: string;
  public answerTypeExternalName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyAnswerType';
  }

  /**
   * Get property definitions for HaleyAnswerType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExernalVersion',
        tsPropertyName: 'answerTypeExernalVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeVersion',
        tsPropertyName: 'answerTypeVersion',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerDataType',
        tsPropertyName: 'haleyAnswerDataType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeUseStartDate',
        tsPropertyName: 'answerTypeUseStartDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isActiveAnswerType',
        tsPropertyName: 'activeAnswerType',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyCurrencyType',
        tsPropertyName: 'haleyCurrencyType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeUseEndDate',
        tsPropertyName: 'answerTypeUseEndDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyAnswerTypeCategory',
        tsPropertyName: 'haleyAnswerTypeCategory',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeIdentifier',
        tsPropertyName: 'answerTypeIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDescription',
        tsPropertyName: 'description',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasFeatureType',
        tsPropertyName: 'featureType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#isRootAnswerType',
        tsPropertyName: 'rootAnswerType',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExternalIdentifier',
        tsPropertyName: 'answerTypeExternalIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasAnswerTypeExternalName',
        tsPropertyName: 'answerTypeExternalName',
        type: 'string',
        required: false
      }
    ];
  }


}
