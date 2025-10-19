import { HaleyContainer } from '../haley-ai-question/haleyContainer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#HaleyMessageContainer
 */
export class HaleyMessageContainer extends HaleyContainer {
  public messageChannelURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#HaleyMessageContainer';
  }

  /**
   * Get property definitions for HaleyMessageContainer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasMessageChannelURI',
        tsPropertyName: 'messageChannelURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
