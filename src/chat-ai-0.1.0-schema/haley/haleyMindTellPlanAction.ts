import { HaleyMindPlanAction } from './haleyMindPlanAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindTellPlanAction
 */
export class HaleyMindTellPlanAction extends HaleyMindPlanAction {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindTellPlanAction';
  }

  /**
   * Get property definitions for HaleyMindTellPlanAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
