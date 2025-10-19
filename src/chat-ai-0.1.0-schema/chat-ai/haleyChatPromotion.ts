import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatPromotion
 */
export class HaleyChatPromotion extends VITAL_Node {
  public haleyChatPromotionCode?: string;
  public haleyChatPromotionStatusURI?: string;
  public haleyChatPromotionTypeURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatPromotion';
  }

  /**
   * Get property definitions for HaleyChatPromotion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionCode',
        tsPropertyName: 'haleyChatPromotionCode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionStatusURI',
        tsPropertyName: 'haleyChatPromotionStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionTypeURI',
        tsPropertyName: 'haleyChatPromotionTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
