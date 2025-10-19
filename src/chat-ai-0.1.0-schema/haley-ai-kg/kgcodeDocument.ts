import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGCodeDocument
 */
export class KGCodeDocument extends KGNode {
  public kGCodeLanguageVersion?: string;
  public kGSourceCode?: string;
  public kGCodeDocumentType?: string;
  public kGCodeInterpreterVersion?: string;
  public kGCodeLanguageURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGCodeDocument';
  }

  /**
   * Get property definitions for KGCodeDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCodeLanguageVersion',
        tsPropertyName: 'kGCodeLanguageVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSourceCode',
        tsPropertyName: 'kGSourceCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCodeDocumentType',
        tsPropertyName: 'kGCodeDocumentType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCodeInterpreterVersion',
        tsPropertyName: 'kGCodeInterpreterVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCodeLanguageURI',
        tsPropertyName: 'kGCodeLanguageURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
