import { HaleyMindMessage } from './haleyMindMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindAskMessage
 */
export class HaleyMindAskMessage extends HaleyMindMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindAskMessage';
  }

  /**
   * Get property definitions for HaleyMindAskMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
