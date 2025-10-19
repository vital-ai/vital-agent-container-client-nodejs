import { HaleyMindGoal } from './haleyMindGoal';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindPrimaryGoal
 */
export class HaleyMindPrimaryGoal extends HaleyMindGoal {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindPrimaryGoal';
  }

  /**
   * Get property definitions for HaleyMindPrimaryGoal
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
