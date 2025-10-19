import { HaleyMindGoal } from './haleyMindGoal';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindPartialGoal
 */
export class HaleyMindPartialGoal extends HaleyMindGoal {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindPartialGoal';
  }

  /**
   * Get property definitions for HaleyMindPartialGoal
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
