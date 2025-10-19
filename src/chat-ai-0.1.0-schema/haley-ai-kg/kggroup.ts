import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGGroup
 */
export class KGGroup extends KGNode {
  public kGGroupType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGGroup';
  }

  /**
   * Get property definitions for KGGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGGroupType',
        tsPropertyName: 'kGGroupType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
