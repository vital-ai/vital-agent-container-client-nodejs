import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGMedia
 */
export class KGMedia extends KGNode {
  public kGContentType?: string;
  public kGMediaEncoding?: string;
  public kGEncodedByteData?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGMedia';
  }

  /**
   * Get property definitions for KGMedia
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGContentType',
        tsPropertyName: 'kGContentType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGMediaEncoding',
        tsPropertyName: 'kGMediaEncoding',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEncodedByteData',
        tsPropertyName: 'kGEncodedByteData',
        type: 'string',
        required: false
      }
    ];
  }


}
