import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#ImageReference
 */
export class ImageReference extends VITAL_Node {
  public documentTitle?: string;
  public documentPublicationDate?: string | Date;
  public contentType?: string;
  public heightPx?: number;
  public widthPx?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#ImageReference';
  }

  /**
   * Get property definitions for ImageReference
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasDocumentTitle',
        tsPropertyName: 'documentTitle',
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
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasContentType',
        tsPropertyName: 'contentType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasHeightPx',
        tsPropertyName: 'heightPx',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasWidthPx',
        tsPropertyName: 'widthPx',
        type: 'number',
        required: false
      }
    ];
  }


}
