import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatCreditPack
 */
export class HaleyChatCreditPack extends VITAL_Node {
  public creditPackProductIdentifier?: string;
  public creditPackDescription?: string;
  public creditPackCreditCount?: number;
  public creditPackPriceIdentifier?: string;
  public creditPackCost?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatCreditPack';
  }

  /**
   * Get property definitions for HaleyChatCreditPack
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasCreditPackProductIdentifier',
        tsPropertyName: 'creditPackProductIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasCreditPackDescription',
        tsPropertyName: 'creditPackDescription',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasCreditPackCreditCount',
        tsPropertyName: 'creditPackCreditCount',
        type: 'number',
        required: false,
        format: 'double'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasCreditPackPriceIdentifier',
        tsPropertyName: 'creditPackPriceIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasCreditPackCost',
        tsPropertyName: 'creditPackCost',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
