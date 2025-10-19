import { AIMPMessageContent } from './aimpmessageContent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AgentMessageContent
 */
export class AgentMessageContent extends AIMPMessageContent {
  public messageAgentInstallURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AgentMessageContent';
  }

  /**
   * Get property definitions for AgentMessageContent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageAgentInstallURI',
        tsPropertyName: 'messageAgentInstallURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
