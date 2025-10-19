import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#PaymentConfirmation
 */
export class PaymentConfirmation extends Card {
  public url?: string;
  public urlAvailable?: boolean;
  public avatarURL?: string;
  declare public recipient?: string;
  public currencySymbol?: string;
  public currencyISymbolnFrontOf?: boolean;
  public amount?: number;
  public title?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#PaymentConfirmation';
  }

  /**
   * Get property definitions for PaymentConfirmation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUrl',
        tsPropertyName: 'url',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isUrlAvailable',
        tsPropertyName: 'urlAvailable',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAvatarURL',
        tsPropertyName: 'avatarURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipient',
        tsPropertyName: 'recipient',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasCurrencySymbol',
        tsPropertyName: 'currencySymbol',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCurrencyISymbolnFrontOf',
        tsPropertyName: 'currencyISymbolnFrontOf',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAmount',
        tsPropertyName: 'amount',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTitle',
        tsPropertyName: 'title',
        type: 'string',
        required: false
      }
    ];
  }


}
