import { HaleyLinkedInMessage } from './haleyLinkedInMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#HaleyLinkedInSearchMessage
 */
export class HaleyLinkedInSearchMessage extends HaleyLinkedInMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#HaleyLinkedInSearchMessage';
  }

  /**
   * Get property definitions for HaleyLinkedInSearchMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
