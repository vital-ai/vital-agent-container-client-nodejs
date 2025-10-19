import { HaleyMindEvent } from './haleyMindEvent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindBotEvent
 */
export class HaleyMindBotEvent extends HaleyMindEvent {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindBotEvent';
  }

  /**
   * Get property definitions for HaleyMindBotEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
