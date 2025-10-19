import { HaleyMindPlanAction } from './haleyMindPlanAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindAskPlanAction
 */
export class HaleyMindAskPlanAction extends HaleyMindPlanAction {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindAskPlanAction';
  }

  /**
   * Get property definitions for HaleyMindAskPlanAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
