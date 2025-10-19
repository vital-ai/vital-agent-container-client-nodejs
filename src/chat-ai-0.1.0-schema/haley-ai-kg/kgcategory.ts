import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGCategory
 */
export class KGCategory extends KGNode {
  public kGCategoryType?: string;
  public kGCategoryRoot?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGCategory';
  }

  /**
   * Get property definitions for KGCategory
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGCategoryType',
        tsPropertyName: 'kGCategoryType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGCategoryRoot',
        tsPropertyName: 'kGCategoryRoot',
        type: 'boolean',
        required: false
      }
    ];
  }


}
