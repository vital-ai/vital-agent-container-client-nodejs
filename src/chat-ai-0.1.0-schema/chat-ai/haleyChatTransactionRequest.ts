import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatTransactionRequest
 */
export class HaleyChatTransactionRequest extends VITAL_Node {
  public haleyChatTransactionRequestTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatTransactionRequest';
  }

  /**
   * Get property definitions for HaleyChatTransactionRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatTransactionRequestTypeURI',
        tsPropertyName: 'haleyChatTransactionRequestTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
