import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatPayment
 */
export class HaleyChatPayment extends VITAL_Node {
  public haleyChatPaymentDescription?: string;
  public haleyChatPaymentReverse?: boolean;
  public haleyChatPaymentCurrent?: boolean;
  public haleyChatPaymentToken?: string;
  public haleyChatPaymentDueDateTime?: string | Date;
  public haleyChatPaymentStatusCode?: string;
  public haleyChatPaymentStatusURI?: string;
  public haleyChatPaymentCurrencyURI?: string;
  public reverseHaleyChatPaymentURI?: string;
  public haleyChatPaymentAmount?: number;
  public haleyChatPaymentStatusMessage?: string;
  public haleyChatPaymentTimestamp?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatPayment';
  }

  /**
   * Get property definitions for HaleyChatPayment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDescription',
        tsPropertyName: 'haleyChatPaymentDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyChatPaymentReverse',
        tsPropertyName: 'haleyChatPaymentReverse',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#isHaleyChatPaymentCurrent',
        tsPropertyName: 'haleyChatPaymentCurrent',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentToken',
        tsPropertyName: 'haleyChatPaymentToken',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentDueDateTime',
        tsPropertyName: 'haleyChatPaymentDueDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusCode',
        tsPropertyName: 'haleyChatPaymentStatusCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusURI',
        tsPropertyName: 'haleyChatPaymentStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentCurrencyURI',
        tsPropertyName: 'haleyChatPaymentCurrencyURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasReverseHaleyChatPaymentURI',
        tsPropertyName: 'reverseHaleyChatPaymentURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentAmount',
        tsPropertyName: 'haleyChatPaymentAmount',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentStatusMessage',
        tsPropertyName: 'haleyChatPaymentStatusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentTimestamp',
        tsPropertyName: 'haleyChatPaymentTimestamp',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
