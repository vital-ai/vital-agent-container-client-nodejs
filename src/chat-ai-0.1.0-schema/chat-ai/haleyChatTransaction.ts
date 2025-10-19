import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatTransaction
 */
export class HaleyChatTransaction extends VITAL_Node {
  public haleyChatTransactionStatusMessage?: string;
  public haleyChatTransactionStatusURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatTransaction';
  }

  /**
   * Get property definitions for HaleyChatTransaction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTransactionStatusMessage',
        tsPropertyName: 'haleyChatTransactionStatusMessage',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTransactionStatusURI',
        tsPropertyName: 'haleyChatTransactionStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
