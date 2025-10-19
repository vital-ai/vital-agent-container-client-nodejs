import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatInteractionCost
 */
export class HaleyChatInteractionCost extends VITAL_Node {
  public interactionCostCreditAmount?: number;
  public interactionCostPer1kOutputTokenAmount?: number;
  public haleyChatPaymentCurrencyURI?: string;
  public haleyChatInteractionTypeURI?: string;
  public haleyChatInteractionModelTypeURI?: string;
  public interactionCostPer1kInputTokenAmount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatInteractionCost';
  }

  /**
   * Get property definitions for HaleyChatInteractionCost
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasInteractionCostCreditAmount',
        tsPropertyName: 'interactionCostCreditAmount',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasInteractionCostPer1kOutputTokenAmount',
        tsPropertyName: 'interactionCostPer1kOutputTokenAmount',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPaymentCurrencyURI',
        tsPropertyName: 'haleyChatPaymentCurrencyURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionTypeURI',
        tsPropertyName: 'haleyChatInteractionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatInteractionModelTypeURI',
        tsPropertyName: 'haleyChatInteractionModelTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasInteractionCostPer1kInputTokenAmount',
        tsPropertyName: 'interactionCostPer1kInputTokenAmount',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
