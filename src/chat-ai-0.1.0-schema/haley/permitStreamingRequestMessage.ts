import { AIMPMessage } from '../vital-aimp/aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#PermitStreamingRequestMessage
 */
export class PermitStreamingRequestMessage extends AIMPMessage {
  public permitStreamingAgentInstallURI?: string;
  public permitStreamingRequestURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#PermitStreamingRequestMessage';
  }

  /**
   * Get property definitions for PermitStreamingRequestMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPermitStreamingAgentInstallURI',
        tsPropertyName: 'permitStreamingAgentInstallURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasPermitStreamingRequestURI',
        tsPropertyName: 'permitStreamingRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
