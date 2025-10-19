import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress
 */
export class HaleyChatBillingAddress extends VITAL_Node {
  public haleyChatTelephoneTypeURI?: string;
  public haleyChatBillingCustomerEmail?: string;
  public primaryBillingAddress?: boolean;
  public haleyChatBillingRegion?: string;
  public haleyChatBillingProvinceURI?: string;
  public haleyChatBillingCustomerName?: string;
  public haleyChatBillingStateURI?: string;
  public haleyChatBillingTelephoneContact?: string;
  public haleyChatBillingStreetAddress2?: string;
  public haleyChatBillingName?: string;
  public haleyChatBillingAddressInitialized?: boolean;
  public haleyChatBillingCity?: string;
  public haleyCountryISOCode?: string;
  public haleyChatBillingPostalCode?: string;
  public haleyChatBillingStreetAddress1?: string;
  public haleyChatAddressNormalizationStatusURI?: string;
  public haleyChatGooglePlaceURI?: string;
  public haleyChatBillingCountryURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatBillingAddress';
  }

  /**
   * Get property definitions for HaleyChatBillingAddress
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTelephoneTypeURI',
        tsPropertyName: 'haleyChatTelephoneTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCustomerEmail',
        tsPropertyName: 'haleyChatBillingCustomerEmail',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isPrimaryBillingAddress',
        tsPropertyName: 'primaryBillingAddress',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingRegion',
        tsPropertyName: 'haleyChatBillingRegion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingProvinceURI',
        tsPropertyName: 'haleyChatBillingProvinceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCustomerName',
        tsPropertyName: 'haleyChatBillingCustomerName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingStateURI',
        tsPropertyName: 'haleyChatBillingStateURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingTelephoneContact',
        tsPropertyName: 'haleyChatBillingTelephoneContact',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingStreetAddress2',
        tsPropertyName: 'haleyChatBillingStreetAddress2',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingName',
        tsPropertyName: 'haleyChatBillingName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyChatBillingAddressInitialized',
        tsPropertyName: 'haleyChatBillingAddressInitialized',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCity',
        tsPropertyName: 'haleyChatBillingCity',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingPostalCode',
        tsPropertyName: 'haleyChatBillingPostalCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingStreetAddress1',
        tsPropertyName: 'haleyChatBillingStreetAddress1',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAddressNormalizationStatusURI',
        tsPropertyName: 'haleyChatAddressNormalizationStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatGooglePlaceURI',
        tsPropertyName: 'haleyChatGooglePlaceURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatBillingCountryURI',
        tsPropertyName: 'haleyChatBillingCountryURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
