import { HaleyMindMessage } from './haleyMindMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindTellMessage
 */
export class HaleyMindTellMessage extends HaleyMindMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindTellMessage';
  }

  /**
   * Get property definitions for HaleyMindTellMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
