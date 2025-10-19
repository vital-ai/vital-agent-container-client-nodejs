import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGDocument
 */
export class KGDocument extends KGNode {
  public kGDocumentContent?: string;
  public kGDocumentStartTokenIndex?: number;
  public kGDocumentSegmentTypeURI?: string;
  public kGDocumentURL?: string;
  public kGDocumentPublicationDateTime?: string | Date;
  public kGDocumentRetrievalDateTime?: string | Date;
  public kGDocumentHTMLContent?: string;
  public kGDocumentHeadline?: string;
  public kGEncodedByteData?: string;
  public kGDocumentExtractedContent?: string;
  public kGDocumentSegmentMethodURI?: string;
  public kGDocumentTokenLength?: number;
  public kGDocumentType?: string;
  public topCategoryURIs?: string;
  public kGDocumentDescription?: string;
  public kGDocumentSummary?: string;
  public kGDocumentSegmentTokenLength?: number;
  public kGContentType?: string;
  public kGDocumentSegmentIndex?: number;
  public kGDocumentEndTokenIndex?: number;
  public primaryLanguageType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGDocument';
  }

  /**
   * Get property definitions for KGDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentContent',
        tsPropertyName: 'kGDocumentContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentStartTokenIndex',
        tsPropertyName: 'kGDocumentStartTokenIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentTypeURI',
        tsPropertyName: 'kGDocumentSegmentTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentURL',
        tsPropertyName: 'kGDocumentURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentPublicationDateTime',
        tsPropertyName: 'kGDocumentPublicationDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentRetrievalDateTime',
        tsPropertyName: 'kGDocumentRetrievalDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentHTMLContent',
        tsPropertyName: 'kGDocumentHTMLContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentHeadline',
        tsPropertyName: 'kGDocumentHeadline',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEncodedByteData',
        tsPropertyName: 'kGEncodedByteData',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentExtractedContent',
        tsPropertyName: 'kGDocumentExtractedContent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentMethodURI',
        tsPropertyName: 'kGDocumentSegmentMethodURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentTokenLength',
        tsPropertyName: 'kGDocumentTokenLength',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentType',
        tsPropertyName: 'kGDocumentType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasTopCategoryURIs',
        tsPropertyName: 'topCategoryURIs',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentDescription',
        tsPropertyName: 'kGDocumentDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSummary',
        tsPropertyName: 'kGDocumentSummary',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentTokenLength',
        tsPropertyName: 'kGDocumentSegmentTokenLength',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGContentType',
        tsPropertyName: 'kGContentType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentSegmentIndex',
        tsPropertyName: 'kGDocumentSegmentIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGDocumentEndTokenIndex',
        tsPropertyName: 'kGDocumentEndTokenIndex',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasPrimaryLanguageType',
        tsPropertyName: 'primaryLanguageType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
