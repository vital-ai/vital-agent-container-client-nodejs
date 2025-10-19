import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Document
 */
export class Document extends VITAL_Node {
  public dmozPath?: string;
  public analyzedBody?: string;
  public docuSignStatus?: string;
  public lang?: string;
  public slug?: string;
  public documentTitle?: string;
  public contentID?: string;
  public documentPublicationDate?: string | Date;
  public analyzedTitle?: string;
  public signedVersion?: boolean;
  public contentTag?: string;
  public documentUrlRoot?: string;
  public body?: string;
  public documentUrl?: string;
  public sentimentMixed?: boolean;
  public sourceDomain?: string;
  public sentimentScore?: number;
  public extractedText?: string;
  public extractedTitle?: string;
  public docuSignEnvelopeID?: string;
  public documentSourceName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Document';
  }

  /**
   * Get property definitions for Document
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDmozPath',
        tsPropertyName: 'dmozPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasAnalyzedBody',
        tsPropertyName: 'analyzedBody',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDocuSignStatus',
        tsPropertyName: 'docuSignStatus',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasLang',
        tsPropertyName: 'lang',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSlug',
        tsPropertyName: 'slug',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentTitle',
        tsPropertyName: 'documentTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasContentID',
        tsPropertyName: 'contentID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentPublicationDate',
        tsPropertyName: 'documentPublicationDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasAnalyzedTitle',
        tsPropertyName: 'analyzedTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isSignedVersion',
        tsPropertyName: 'signedVersion',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasContentTag',
        tsPropertyName: 'contentTag',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentUrlRoot',
        tsPropertyName: 'documentUrlRoot',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasBody',
        tsPropertyName: 'body',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentUrl',
        tsPropertyName: 'documentUrl',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#isSentimentMixed',
        tsPropertyName: 'sentimentMixed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasSourceDomain',
        tsPropertyName: 'sourceDomain',
        type: 'string',
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
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasExtractedText',
        tsPropertyName: 'extractedText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasExtractedTitle',
        tsPropertyName: 'extractedTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDocuSignEnvelopeID',
        tsPropertyName: 'docuSignEnvelopeID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentSourceName',
        tsPropertyName: 'documentSourceName',
        type: 'string',
        required: false
      }
    ];
  }


}
