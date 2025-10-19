import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGSpace
 */
export class KGSpace extends KGNode {
  public kGSpaceIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGSpace';
  }

  /**
   * Get property definitions for KGSpace
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGSpaceIdentifier',
        tsPropertyName: 'kGSpaceIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
