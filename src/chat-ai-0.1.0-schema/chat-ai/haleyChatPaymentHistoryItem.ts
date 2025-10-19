import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem
 */
export class HaleyChatPaymentHistoryItem extends VITAL_Node {
  public haleyChatPaymentDescription?: string;
  public haleyChatPaymentReverse?: boolean;
  public haleyChatPaymentDueDateTime?: string | Date;
  public haleyChatPaymentStatusCode?: string;
  public haleyChatPaymentStatusURI?: string;
  public haleyChatPaymentCurrencyURI?: string;
  public haleyChatPaymentAmount?: number;
  public haleyChatPaymentStatusMessage?: string;
  public haleyChatPaymentTimestamp?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatPaymentHistoryItem';
  }

  /**
   * Get property definitions for HaleyChatPaymentHistoryItem
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
