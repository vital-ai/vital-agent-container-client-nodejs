import { HaleyMindPlanAction } from './haleyMindPlanAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindDatascriptPlanAction
 */
export class HaleyMindDatascriptPlanAction extends HaleyMindPlanAction {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindDatascriptPlanAction';
  }

  /**
   * Get property definitions for HaleyMindDatascriptPlanAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
