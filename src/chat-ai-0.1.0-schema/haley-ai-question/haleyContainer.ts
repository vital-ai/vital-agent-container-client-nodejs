import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyContainer
 */
export class HaleyContainer extends VITAL_Node {
  public serializedContainer?: string;
  public serializedContainerJSON?: string;
  public haleyContainerTypeURI?: string;
  public containerUpdateTime?: string | Date;
  public containerSortOrder?: number;
  public kGModelVersion?: string;
  public haleyContainerScopeTypeURI?: string;
  public kGDataHash?: string;
  public compressed?: boolean;
  public haleyQueryName?: string;
  public kGVersion?: string;
  public haleyParameterURI?: string;
  public haleyContainerAnswerSetURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyContainer';
  }

  /**
   * Get property definitions for HaleyContainer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSerializedContainer',
        tsPropertyName: 'serializedContainer',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasSerializedContainerJSON',
        tsPropertyName: 'serializedContainerJSON',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyContainerTypeURI',
        tsPropertyName: 'haleyContainerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasContainerUpdateTime',
        tsPropertyName: 'containerUpdateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasContainerSortOrder',
        tsPropertyName: 'containerSortOrder',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGModelVersion',
        tsPropertyName: 'kGModelVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyContainerScopeTypeURI',
        tsPropertyName: 'haleyContainerScopeTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDataHash',
        tsPropertyName: 'kGDataHash',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCompressed',
        tsPropertyName: 'compressed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyQueryName',
        tsPropertyName: 'haleyQueryName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGVersion',
        tsPropertyName: 'kGVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyParameterURI',
        tsPropertyName: 'haleyParameterURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyContainerAnswerSetURI',
        tsPropertyName: 'haleyContainerAnswerSetURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
