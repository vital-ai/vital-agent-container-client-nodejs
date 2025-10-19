import { HaleyLinkedInMessage } from './haleyLinkedInMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyLinkedInPostMessage
 */
export class HaleyLinkedInPostMessage extends HaleyLinkedInMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyLinkedInPostMessage';
  }

  /**
   * Get property definitions for HaleyLinkedInPostMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
