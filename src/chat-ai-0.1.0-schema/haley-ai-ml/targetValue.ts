import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#TargetValue
 */
export class TargetValue extends VITAL_Node {
  public targetDoubleValue?: number;
  public targetIntegerValue?: number;
  public targetStringValue?: string;
  public targetKey?: string;
  public targetType?: string;
  public targetWeight?: number;
  public targetBooleanValue?: boolean;
  public targetEncodedStringValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#TargetValue';
  }

  /**
   * Get property definitions for TargetValue
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasTargetDoubleValue',
        tsPropertyName: 'targetDoubleValue',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasTargetIntegerValue',
        tsPropertyName: 'targetIntegerValue',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasTargetStringValue',
        tsPropertyName: 'targetStringValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasTargetKey',
        tsPropertyName: 'targetKey',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasTargetType',
        tsPropertyName: 'targetType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasTargetWeight',
        tsPropertyName: 'targetWeight',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasTargetBooleanValue',
        tsPropertyName: 'targetBooleanValue',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-ml#hasTargetEncodedStringValue',
        tsPropertyName: 'targetEncodedStringValue',
        type: 'string',
        required: false
      }
    ];
  }


}
