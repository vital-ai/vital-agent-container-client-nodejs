import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding
 */
export class HaleyMindRuleParameterBinding extends VITAL_Node {
  public parameterBindingVariable?: string;
  public integerParameterBinding?: number;
  public booleanParameterBinding?: boolean;
  public listBinaryParameterBinding?: string[];
  public listBooleanParameterBinding?: boolean[];
  public listDateTimeParameterBinding?: string[];
  public dateTimeParameterBinding?: string | Date;
  public binaryParameterBinding?: string;
  public stringParameterBinding?: string;
  public listStringParameterBinding?: string[];
  public listIntegerParameterBinding?: number[];
  public listDoubleParameterBinding?: number[];
  public doubleParameterBinding?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindRuleParameterBinding';
  }

  /**
   * Get property definitions for HaleyMindRuleParameterBinding
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasParameterBindingVariable',
        tsPropertyName: 'parameterBindingVariable',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasIntegerParameterBinding',
        tsPropertyName: 'integerParameterBinding',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasBooleanParameterBinding',
        tsPropertyName: 'booleanParameterBinding',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListBinaryParameterBinding',
        tsPropertyName: 'listBinaryParameterBinding',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListBooleanParameterBinding',
        tsPropertyName: 'listBooleanParameterBinding',
        type: 'boolean[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListDateTimeParameterBinding',
        tsPropertyName: 'listDateTimeParameterBinding',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDateTimeParameterBinding',
        tsPropertyName: 'dateTimeParameterBinding',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasBinaryParameterBinding',
        tsPropertyName: 'binaryParameterBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasStringParameterBinding',
        tsPropertyName: 'stringParameterBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListStringParameterBinding',
        tsPropertyName: 'listStringParameterBinding',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListIntegerParameterBinding',
        tsPropertyName: 'listIntegerParameterBinding',
        type: 'number[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListDoubleParameterBinding',
        tsPropertyName: 'listDoubleParameterBinding',
        type: 'number[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDoubleParameterBinding',
        tsPropertyName: 'doubleParameterBinding',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
