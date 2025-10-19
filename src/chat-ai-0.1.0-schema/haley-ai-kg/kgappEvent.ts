import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAppEvent
 */
export class KGAppEvent extends VITAL_Node {
  public kGAppEventAgent?: string;
  public kGAppEventType?: string;
  public kGAppEventSourceURI?: string;
  public kGAppEventActorURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGAppEvent';
  }

  /**
   * Get property definitions for KGAppEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAppEventAgent',
        tsPropertyName: 'kGAppEventAgent',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAppEventType',
        tsPropertyName: 'kGAppEventType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAppEventSourceURI',
        tsPropertyName: 'kGAppEventSourceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAppEventActorURI',
        tsPropertyName: 'kGAppEventActorURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
