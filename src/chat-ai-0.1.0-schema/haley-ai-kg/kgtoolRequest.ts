import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGToolRequest
 */
export class KGToolRequest extends KGNode {
  public kGToolRequestType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGToolRequest';
  }

  /**
   * Get property definitions for KGToolRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGToolRequestType',
        tsPropertyName: 'kGToolRequestType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
