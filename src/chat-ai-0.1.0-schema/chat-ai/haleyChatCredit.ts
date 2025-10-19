import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatCredit
 */
export class HaleyChatCredit extends VITAL_Node {
  public haleyChatQuotaCreditAmount?: number;
  public creditPaidDateTime?: string | Date;
  public haleyChatCreditStatusURI?: string;
  public creditedDateTime?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatCredit';
  }

  /**
   * Get property definitions for HaleyChatCredit
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatQuotaCreditAmount',
        tsPropertyName: 'haleyChatQuotaCreditAmount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasCreditPaidDateTime',
        tsPropertyName: 'creditPaidDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatCreditStatusURI',
        tsPropertyName: 'haleyChatCreditStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasCreditedDateTime',
        tsPropertyName: 'creditedDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
