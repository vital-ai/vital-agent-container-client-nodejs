import { HaleyQueryCriteriaGroup } from './haleyQueryCriteriaGroup';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaORGroup
 */
export class HaleyQueryCriteriaORGroup extends HaleyQueryCriteriaGroup {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaORGroup';
  }

  /**
   * Get property definitions for HaleyQueryCriteriaORGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
