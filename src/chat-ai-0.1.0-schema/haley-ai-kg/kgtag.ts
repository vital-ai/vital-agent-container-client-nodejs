import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTag
 */
export class KGTag extends KGNode {
  public kGTagName?: string;
  public kGTagType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGTag';
  }

  /**
   * Get property definitions for KGTag
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTagName',
        tsPropertyName: 'kGTagName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTagType',
        tsPropertyName: 'kGTagType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
