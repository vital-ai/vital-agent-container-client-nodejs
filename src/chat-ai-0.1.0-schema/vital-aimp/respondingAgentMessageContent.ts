import { AIMPMessageContent } from './aimpmessageContent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RespondingAgentMessageContent
 */
export class RespondingAgentMessageContent extends AIMPMessageContent {
  public messageAgentInstallURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#RespondingAgentMessageContent';
  }

  /**
   * Get property definitions for RespondingAgentMessageContent
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
