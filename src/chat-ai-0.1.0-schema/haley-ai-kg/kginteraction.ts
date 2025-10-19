import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGInteraction
 */
export class KGInteraction extends KGNode {
  public kGInteractionType?: string;
  public interactionSequence?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGInteraction';
  }

  /**
   * Get property definitions for KGInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGInteractionType',
        tsPropertyName: 'kGInteractionType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasInteractionSequence',
        tsPropertyName: 'interactionSequence',
        type: 'number',
        required: false
      }
    ];
  }


}
