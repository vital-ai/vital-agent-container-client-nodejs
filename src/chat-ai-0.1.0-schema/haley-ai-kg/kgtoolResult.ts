import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGToolResult
 */
export class KGToolResult extends KGNode {
  public kGToolResultType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGToolResult';
  }

  /**
   * Get property definitions for KGToolResult
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGToolResultType',
        tsPropertyName: 'kGToolResultType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
