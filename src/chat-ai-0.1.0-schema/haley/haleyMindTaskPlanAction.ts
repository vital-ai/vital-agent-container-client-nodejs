import { HaleyMindPlanAction } from './haleyMindPlanAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindTaskPlanAction
 */
export class HaleyMindTaskPlanAction extends HaleyMindPlanAction {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindTaskPlanAction';
  }

  /**
   * Get property definitions for HaleyMindTaskPlanAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
