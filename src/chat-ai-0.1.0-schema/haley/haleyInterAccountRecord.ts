import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyInterAccountRecord
 */
export class HaleyInterAccountRecord extends VITAL_Node {
  public interAccountDestinationChannelURI?: string;
  public interAccountRecipientLoginURI?: string;
  public interAccountRecipientAccountURI?: string;
  public interAccountSourceChannelURI?: string;
  public interAccountSenderLoginURI?: string;
  public interAccountReplyMessageURI?: string;
  public interAccountResponseDateTime?: string | Date;
  public interAccountSenderAccountURI?: string;
  public interAccountSerializedResponse?: string;
  public interAccountResponseURI?: string;
  public interAccountSenderMessageURI?: string;
  public interAccountRequestDateTime?: string | Date;
  public interAccountRequestURI?: string;
  public interAccountResponseStatusURI?: string;
  public interAccountSerializedRequest?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyInterAccountRecord';
  }

  /**
   * Get property definitions for HaleyInterAccountRecord
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountDestinationChannelURI',
        tsPropertyName: 'interAccountDestinationChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountRecipientLoginURI',
        tsPropertyName: 'interAccountRecipientLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountRecipientAccountURI',
        tsPropertyName: 'interAccountRecipientAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSourceChannelURI',
        tsPropertyName: 'interAccountSourceChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSenderLoginURI',
        tsPropertyName: 'interAccountSenderLoginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountReplyMessageURI',
        tsPropertyName: 'interAccountReplyMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountResponseDateTime',
        tsPropertyName: 'interAccountResponseDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSenderAccountURI',
        tsPropertyName: 'interAccountSenderAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSerializedResponse',
        tsPropertyName: 'interAccountSerializedResponse',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountResponseURI',
        tsPropertyName: 'interAccountResponseURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSenderMessageURI',
        tsPropertyName: 'interAccountSenderMessageURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountRequestDateTime',
        tsPropertyName: 'interAccountRequestDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountRequestURI',
        tsPropertyName: 'interAccountRequestURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountResponseStatusURI',
        tsPropertyName: 'interAccountResponseStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasInterAccountSerializedRequest',
        tsPropertyName: 'interAccountSerializedRequest',
        type: 'string',
        required: false
      }
    ];
  }


}
