import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyChannelCardsListMessage
 */
export class HaleyChannelCardsListMessage extends HaleyMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyChannelCardsListMessage';
  }

  /**
   * Get property definitions for HaleyChannelCardsListMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
