import { KGQueryCriteriaGroup } from './kgqueryCriteriaGroup';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaORGroup
 */
export class KGQueryCriteriaORGroup extends KGQueryCriteriaGroup {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaORGroup';
  }

  /**
   * Get property definitions for KGQueryCriteriaORGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
