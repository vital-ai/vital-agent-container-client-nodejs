import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGActor
 */
export class KGActor extends KGNode {
  public kGActorType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGActor';
  }

  /**
   * Get property definitions for KGActor
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGActorType',
        tsPropertyName: 'kGActorType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
