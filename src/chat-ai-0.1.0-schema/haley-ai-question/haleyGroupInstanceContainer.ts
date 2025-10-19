import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceContainer
 */
export class HaleyGroupInstanceContainer extends VITAL_Node {
  public serializedContainer?: string;
  public serializedContainerJSON?: string;
  public haleyGroupBaseVersion?: string;
  public containerUpdateTime?: string | Date;
  public containerGroupInstanceURI?: string;
  public compressed?: boolean;
  public haleyGroupBase?: string;
  public haleyParameterURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyGroupInstanceContainer';
  }

  /**
   * Get property definitions for HaleyGroupInstanceContainer
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
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBaseVersion',
        tsPropertyName: 'haleyGroupBaseVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasContainerUpdateTime',
        tsPropertyName: 'containerUpdateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasContainerGroupInstanceURI',
        tsPropertyName: 'containerGroupInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCompressed',
        tsPropertyName: 'compressed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyGroupBase',
        tsPropertyName: 'haleyGroupBase',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-question#hasHaleyParameterURI',
        tsPropertyName: 'haleyParameterURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
