import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Sentence
 */
export class Sentence extends VITAL_Node {
  public tokensTextString?: string;
  public endPosition?: number;
  public posTagsValuesString?: string;
  public sentenceNumber?: number;
  public tokensPositionsString?: string;
  public startPosition?: number;
  public posTagsConfidenceString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Sentence';
  }

  /**
   * Get property definitions for Sentence
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTokensTextString',
        tsPropertyName: 'tokensTextString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEndPosition',
        tsPropertyName: 'endPosition',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasPosTagsValuesString',
        tsPropertyName: 'posTagsValuesString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSentenceNumber',
        tsPropertyName: 'sentenceNumber',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTokensPositionsString',
        tsPropertyName: 'tokensPositionsString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasStartPosition',
        tsPropertyName: 'startPosition',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasPosTagsConfidenceString',
        tsPropertyName: 'posTagsConfidenceString',
        type: 'string',
        required: false
      }
    ];
  }


}
