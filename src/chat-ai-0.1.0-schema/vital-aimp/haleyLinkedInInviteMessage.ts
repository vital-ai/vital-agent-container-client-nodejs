import { HaleyLinkedInMessage } from './haleyLinkedInMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyLinkedInInviteMessage
 */
export class HaleyLinkedInInviteMessage extends HaleyLinkedInMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyLinkedInInviteMessage';
  }

  /**
   * Get property definitions for HaleyLinkedInInviteMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
