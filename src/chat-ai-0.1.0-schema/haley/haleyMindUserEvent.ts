import { HaleyMindEvent } from './haleyMindEvent';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindUserEvent
 */
export class HaleyMindUserEvent extends HaleyMindEvent {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindUserEvent';
  }

  /**
   * Get property definitions for HaleyMindUserEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
