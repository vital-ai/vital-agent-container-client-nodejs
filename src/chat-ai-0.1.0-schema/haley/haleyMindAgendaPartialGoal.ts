import { HaleyMindAgendaGoal } from './haleyMindAgendaGoal';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindAgendaPartialGoal
 */
export class HaleyMindAgendaPartialGoal extends HaleyMindAgendaGoal {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindAgendaPartialGoal';
  }

  /**
   * Get property definitions for HaleyMindAgendaPartialGoal
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
