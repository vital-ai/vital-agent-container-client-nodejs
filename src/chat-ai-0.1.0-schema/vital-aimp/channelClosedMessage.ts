import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChannelClosedMessage
 */
export class ChannelClosedMessage extends AIMPMessage {
  public childChannelURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ChannelClosedMessage';
  }

  /**
   * Get property definitions for ChannelClosedMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChildChannelURI',
        tsPropertyName: 'childChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
