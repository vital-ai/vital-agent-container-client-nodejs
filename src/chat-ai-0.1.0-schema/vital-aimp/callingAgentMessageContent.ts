import { AIMPMessageContent } from './aimpmessageContent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CallingAgentMessageContent
 */
export class CallingAgentMessageContent extends AIMPMessageContent {
  public messageAgentInstallURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CallingAgentMessageContent';
  }

  /**
   * Get property definitions for CallingAgentMessageContent
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
