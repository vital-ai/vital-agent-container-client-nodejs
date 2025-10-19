import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTool
 */
export class KGTool extends KGNode {
  public kGToolType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGTool';
  }

  /**
   * Get property definitions for KGTool
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGToolType',
        tsPropertyName: 'kGToolType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
