import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAgentPublisher
 */
export class KGAgentPublisher extends KGNode {
  public kGAgentPublisherType?: string;
  public kGAgentPublisherWebsiteURL?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGAgentPublisher';
  }

  /**
   * Get property definitions for KGAgentPublisher
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherType',
        tsPropertyName: 'kGAgentPublisherType',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAgentPublisherWebsiteURL',
        tsPropertyName: 'kGAgentPublisherWebsiteURL',
        type: 'string',
        required: false
      }
    ];
  }


}
