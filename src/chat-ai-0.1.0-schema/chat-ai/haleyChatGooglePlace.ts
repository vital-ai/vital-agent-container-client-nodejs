import { HaleyPlace } from '../haley/haleyPlace';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyChatGooglePlace
 */
export class HaleyChatGooglePlace extends HaleyPlace {
  public googlePlaceId?: string;
  public googlePlaceJSON?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyChatGooglePlace';
  }

  /**
   * Get property definitions for HaleyChatGooglePlace
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasGooglePlaceId',
        tsPropertyName: 'googlePlaceId',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasGooglePlaceJSON',
        tsPropertyName: 'googlePlaceJSON',
        type: 'string',
        required: false
      }
    ];
  }


}
