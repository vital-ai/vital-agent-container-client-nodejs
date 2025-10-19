import { HaleyMindEvent } from './haleyMindEvent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindTaskEvent
 */
export class HaleyMindTaskEvent extends HaleyMindEvent {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindTaskEvent';
  }

  /**
   * Get property definitions for HaleyMindTaskEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
