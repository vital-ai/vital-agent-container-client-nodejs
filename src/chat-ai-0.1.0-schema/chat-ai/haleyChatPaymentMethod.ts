import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod
 */
export class HaleyChatPaymentMethod extends VITAL_Node {
  public haleyChatPaymentMethodIssuingBankName?: string;
  public haleyCountryISOCode?: string;
  public haleyChatPaymentMethodName?: string;
  public haleyChatPaymentMethodLastDigits?: string;
  public haleyChatPaymentNetworkURI?: string;
  public haleyChatPaymentMethodExpirationYear?: number;
  public haleyChatPaymentMethodAddedDate?: string | Date;
  public haleyChatPaymentMethodTypeURI?: string;
  public haleyChatPaymentMethodIdentifier?: string;
  public haleyChatPaymentMethodExpirationMonth?: number;
  public haleyChatPaymentMethodExpirationDate?: string | Date;
  public haleyChatPaymentMethodStatusURI?: string;
  public haleyChatPaymentMethodCountryURI?: string;
  public haleyChatPaymentMethodHash?: string;
  public haleyChatPaymentMethodDefault?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatPaymentMethod';
  }

  /**
   * Get property definitions for HaleyChatPaymentMethod
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodIssuingBankName',
        tsPropertyName: 'haleyChatPaymentMethodIssuingBankName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasHaleyCountryISOCode',
        tsPropertyName: 'haleyCountryISOCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodName',
        tsPropertyName: 'haleyChatPaymentMethodName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodLastDigits',
        tsPropertyName: 'haleyChatPaymentMethodLastDigits',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentNetworkURI',
        tsPropertyName: 'haleyChatPaymentNetworkURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodExpirationYear',
        tsPropertyName: 'haleyChatPaymentMethodExpirationYear',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodAddedDate',
        tsPropertyName: 'haleyChatPaymentMethodAddedDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodTypeURI',
        tsPropertyName: 'haleyChatPaymentMethodTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodIdentifier',
        tsPropertyName: 'haleyChatPaymentMethodIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodExpirationMonth',
        tsPropertyName: 'haleyChatPaymentMethodExpirationMonth',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodExpirationDate',
        tsPropertyName: 'haleyChatPaymentMethodExpirationDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodStatusURI',
        tsPropertyName: 'haleyChatPaymentMethodStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodCountryURI',
        tsPropertyName: 'haleyChatPaymentMethodCountryURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentMethodHash',
        tsPropertyName: 'haleyChatPaymentMethodHash',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyChatPaymentMethodDefault',
        tsPropertyName: 'haleyChatPaymentMethodDefault',
        type: 'boolean',
        required: false
      }
    ];
  }


}
