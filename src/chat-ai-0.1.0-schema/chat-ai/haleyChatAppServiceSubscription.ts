import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAppServiceSubscription
 */
export class HaleyChatAppServiceSubscription extends VITAL_Node {
  public appServiceInstanceURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAppServiceSubscription';
  }

  /**
   * Get property definitions for HaleyChatAppServiceSubscription
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAppServiceInstanceURI',
        tsPropertyName: 'appServiceInstanceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
