import { HaleyLinkedInMessage } from './haleyLinkedInMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyLinkedInTextMessage
 */
export class HaleyLinkedInTextMessage extends HaleyLinkedInMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyLinkedInTextMessage';
  }

  /**
   * Get property definitions for HaleyLinkedInTextMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
