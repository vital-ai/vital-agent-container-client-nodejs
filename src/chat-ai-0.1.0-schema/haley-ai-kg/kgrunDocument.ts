import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGRunDocument
 */
export class KGRunDocument extends KGNode {
  public kGRunCodeOutput?: string;
  public kGRunDocumentType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGRunDocument';
  }

  /**
   * Get property definitions for KGRunDocument
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRunCodeOutput',
        tsPropertyName: 'kGRunCodeOutput',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGRunDocumentType',
        tsPropertyName: 'kGRunDocumentType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
