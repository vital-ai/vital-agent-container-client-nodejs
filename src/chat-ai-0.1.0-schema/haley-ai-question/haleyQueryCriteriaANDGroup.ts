import { HaleyQueryCriteriaGroup } from './haleyQueryCriteriaGroup';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaANDGroup
 */
export class HaleyQueryCriteriaANDGroup extends HaleyQueryCriteriaGroup {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyQueryCriteriaANDGroup';
  }

  /**
   * Get property definitions for HaleyQueryCriteriaANDGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
