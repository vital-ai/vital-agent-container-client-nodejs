import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BridgeSessionMessage
 */
export class BridgeSessionMessage extends AIMPMessage {
  public bridgeSequenceNumber?: number;
  public bridgeAccountURI?: string;
  public serializedBridgeMessage?: string;
  public bridgeChannelURI?: string;
  public bridgeSessionID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#BridgeSessionMessage';
  }

  /**
   * Get property definitions for BridgeSessionMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBridgeSequenceNumber',
        tsPropertyName: 'bridgeSequenceNumber',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBridgeAccountURI',
        tsPropertyName: 'bridgeAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSerializedBridgeMessage',
        tsPropertyName: 'serializedBridgeMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBridgeChannelURI',
        tsPropertyName: 'bridgeChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBridgeSessionID',
        tsPropertyName: 'bridgeSessionID',
        type: 'string',
        required: false
      }
    ];
  }


}
