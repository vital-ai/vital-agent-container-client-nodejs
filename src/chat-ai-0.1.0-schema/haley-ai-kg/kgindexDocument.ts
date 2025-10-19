import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGIndexDocument
 */
export class KGIndexDocument extends VITAL_Node {
  public documentAuthorList?: string;
  public documentContentType?: string;
  public documentVersion?: string;
  public documentRetrievalDateTime?: string | Date;
  public documentHeadline?: string;
  public documentOriginalURL?: string;
  public kGIndexDocumentStorageTypeURI?: string;
  public documentHTMLContent?: string;
  public documentPublicationDateTime?: string | Date;
  public kGIndexDocumentStatusURI?: string;
  public documentDescription?: string;
  public documentCorrectedURL?: string;
  public documentContentPath?: string;
  public kGIndexDocumentClassificationURI?: string;
  public documentURL?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGIndexDocument';
  }

  /**
   * Get property definitions for KGIndexDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentAuthorList',
        tsPropertyName: 'documentAuthorList',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentContentType',
        tsPropertyName: 'documentContentType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentVersion',
        tsPropertyName: 'documentVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentRetrievalDateTime',
        tsPropertyName: 'documentRetrievalDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentHeadline',
        tsPropertyName: 'documentHeadline',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentOriginalURL',
        tsPropertyName: 'documentOriginalURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentStorageTypeURI',
        tsPropertyName: 'kGIndexDocumentStorageTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentHTMLContent',
        tsPropertyName: 'documentHTMLContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentPublicationDateTime',
        tsPropertyName: 'documentPublicationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentStatusURI',
        tsPropertyName: 'kGIndexDocumentStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentDescription',
        tsPropertyName: 'documentDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentCorrectedURL',
        tsPropertyName: 'documentCorrectedURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentContentPath',
        tsPropertyName: 'documentContentPath',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGIndexDocumentClassificationURI',
        tsPropertyName: 'kGIndexDocumentClassificationURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasDocumentURL',
        tsPropertyName: 'documentURL',
        type: 'string',
        required: false
      }
    ];
  }


}
