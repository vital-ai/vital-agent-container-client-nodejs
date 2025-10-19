import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AIMPMessageContainer
 */
export class AIMPMessageContainer extends VITAL_Node {
  public sourceUserName?: string;
  public senderIdentity?: string;
  public sourceAccountName?: string;
  public destinationAccountURI?: string;
  public aIMPMessageContainerTypeURI?: string;
  public replyTo?: string;
  declare public loginURI?: string;
  public recipientIdentity?: string;
  public sourceUserID?: string;
  public sourceAccountURI?: string;
  public channelURI?: string;
  public accountURI?: string;
  public serializedMessage?: string;
  public destinationAccountName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AIMPMessageContainer';
  }

  /**
   * Get property definitions for AIMPMessageContainer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceUserName',
        tsPropertyName: 'sourceUserName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSenderIdentity',
        tsPropertyName: 'senderIdentity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceAccountName',
        tsPropertyName: 'sourceAccountName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationAccountURI',
        tsPropertyName: 'destinationAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAIMPMessageContainerTypeURI',
        tsPropertyName: 'aIMPMessageContainerTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isReplyTo',
        tsPropertyName: 'replyTo',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipientIdentity',
        tsPropertyName: 'recipientIdentity',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceUserID',
        tsPropertyName: 'sourceUserID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSourceAccountURI',
        tsPropertyName: 'sourceAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChannelURI',
        tsPropertyName: 'channelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasAccountURI',
        tsPropertyName: 'accountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSerializedMessage',
        tsPropertyName: 'serializedMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDestinationAccountName',
        tsPropertyName: 'destinationAccountName',
        type: 'string',
        required: false
      }
    ];
  }


}
