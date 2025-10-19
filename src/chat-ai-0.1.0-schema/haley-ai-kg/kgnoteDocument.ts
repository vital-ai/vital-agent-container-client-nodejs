import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGNoteDocument
 */
export class KGNoteDocument extends KGNode {
  public kGNoteDocumentType?: string;
  public kGNoteDocumentTitle?: string;
  public kGNoteDocumentContent?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGNoteDocument';
  }

  /**
   * Get property definitions for KGNoteDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNoteDocumentType',
        tsPropertyName: 'kGNoteDocumentType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNoteDocumentTitle',
        tsPropertyName: 'kGNoteDocumentTitle',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGNoteDocumentContent',
        tsPropertyName: 'kGNoteDocumentContent',
        type: 'string',
        required: false
      }
    ];
  }


}
