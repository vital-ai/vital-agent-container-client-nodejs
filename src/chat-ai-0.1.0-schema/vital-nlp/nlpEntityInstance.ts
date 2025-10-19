import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#NlpEntityInstance
 */
export class NlpEntityInstance extends VITAL_Node {
  public sentimentMixed?: boolean;
  public entityAuthor?: string;
  public entityOffset?: number;
  public sentimentScore?: number;
  public length?: number;
  public spanType?: string;
  public entityOffsetInSentence?: number;
  public exactString?: string;
  public lengthInSentence?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#NlpEntityInstance';
  }

  /**
   * Get property definitions for NlpEntityInstance
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#isSentimentMixed',
        tsPropertyName: 'sentimentMixed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEntityAuthor',
        tsPropertyName: 'entityAuthor',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEntityOffset',
        tsPropertyName: 'entityOffset',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSentimentScore',
        tsPropertyName: 'sentimentScore',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLength',
        tsPropertyName: 'length',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSpanType',
        tsPropertyName: 'spanType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasEntityOffsetInSentence',
        tsPropertyName: 'entityOffsetInSentence',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasExactString',
        tsPropertyName: 'exactString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLengthInSentence',
        tsPropertyName: 'lengthInSentence',
        type: 'number',
        required: false
      }
    ];
  }


}
