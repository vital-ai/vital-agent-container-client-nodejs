import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatAppliedPromotion
 */
export class HaleyChatAppliedPromotion extends VITAL_Node {
  public haleyChatPromotionURI?: string;
  public haleyChatAppliedPromotionStatusURI?: string;
  public haleyChatPromotionUseDateTime?: string | Date;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatAppliedPromotion';
  }

  /**
   * Get property definitions for HaleyChatAppliedPromotion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionURI',
        tsPropertyName: 'haleyChatPromotionURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatAppliedPromotionStatusURI',
        tsPropertyName: 'haleyChatAppliedPromotionStatusURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasHaleyChatPromotionUseDateTime',
        tsPropertyName: 'haleyChatPromotionUseDateTime',
        type: 'string',
        required: false,
        format: 'date-time'
      }
    ];
  }


}
