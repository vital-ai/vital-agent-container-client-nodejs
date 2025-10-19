import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGEntityMention
 */
export class KGEntityMention extends KGNode {
  public kGEntityType?: string;
  public kGEntityLoginURI?: string;
  public kGEntityAccountURI?: string;
  public kGExtractTaskURI?: string;
  public kGTypeMethodURI?: string;
  public kGEntityTypeDescription?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGEntityMention';
  }

  /**
   * Get property definitions for KGEntityMention
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityType',
        tsPropertyName: 'kGEntityType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityLoginURI',
        tsPropertyName: 'kGEntityLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityAccountURI',
        tsPropertyName: 'kGEntityAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGExtractTaskURI',
        tsPropertyName: 'kGExtractTaskURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTypeMethodURI',
        tsPropertyName: 'kGTypeMethodURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGEntityTypeDescription',
        tsPropertyName: 'kGEntityTypeDescription',
        type: 'string',
        required: false
      }
    ];
  }


}
