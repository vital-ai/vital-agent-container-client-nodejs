import { HaleyMindAgendaGoal } from './haleyMindAgendaGoal';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindAgendaPrimaryGoal
 */
export class HaleyMindAgendaPrimaryGoal extends HaleyMindAgendaGoal {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindAgendaPrimaryGoal';
  }

  /**
   * Get property definitions for HaleyMindAgendaPrimaryGoal
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
