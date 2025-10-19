import { HaleyMindPlanAction } from './haleyMindPlanAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyMindRecommendationPlanAction
 */
export class HaleyMindRecommendationPlanAction extends HaleyMindPlanAction {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyMindRecommendationPlanAction';
  }

  /**
   * Get property definitions for HaleyMindRecommendationPlanAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
