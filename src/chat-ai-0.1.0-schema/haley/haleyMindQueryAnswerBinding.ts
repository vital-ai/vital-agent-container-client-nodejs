import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding
 */
export class HaleyMindQueryAnswerBinding extends VITAL_Node {
  public answerBindingVariable?: string;
  public booleanAnswerBinding?: boolean;
  public listDateTimeAnswerBinding?: string[];
  public doubleAnswerBinding?: number;
  public listIntegerAnswerBinding?: number[];
  public listStringAnswerBinding?: string[];
  public stringAnswerBinding?: string;
  public dateTimeAnswerBinding?: string | Date;
  public listBooleanAnswerBinding?: boolean[];
  public listDoubleAnswerBinding?: number[];
  public listBinaryAnswerBinding?: string[];
  public integerAnswerBinding?: number;
  public binaryAnswerBinding?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindQueryAnswerBinding';
  }

  /**
   * Get property definitions for HaleyMindQueryAnswerBinding
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAnswerBindingVariable',
        tsPropertyName: 'answerBindingVariable',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasBooleanAnswerBinding',
        tsPropertyName: 'booleanAnswerBinding',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListDateTimeAnswerBinding',
        tsPropertyName: 'listDateTimeAnswerBinding',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDoubleAnswerBinding',
        tsPropertyName: 'doubleAnswerBinding',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListIntegerAnswerBinding',
        tsPropertyName: 'listIntegerAnswerBinding',
        type: 'number[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListStringAnswerBinding',
        tsPropertyName: 'listStringAnswerBinding',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasStringAnswerBinding',
        tsPropertyName: 'stringAnswerBinding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasDateTimeAnswerBinding',
        tsPropertyName: 'dateTimeAnswerBinding',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListBooleanAnswerBinding',
        tsPropertyName: 'listBooleanAnswerBinding',
        type: 'boolean[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListDoubleAnswerBinding',
        tsPropertyName: 'listDoubleAnswerBinding',
        type: 'number[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasListBinaryAnswerBinding',
        tsPropertyName: 'listBinaryAnswerBinding',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasIntegerAnswerBinding',
        tsPropertyName: 'integerAnswerBinding',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasBinaryAnswerBinding',
        tsPropertyName: 'binaryAnswerBinding',
        type: 'string',
        required: false
      }
    ];
  }


}
