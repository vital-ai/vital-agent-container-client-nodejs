import { KGQueryCriteriaGroup } from './kgqueryCriteriaGroup';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaANDGroup
 */
export class KGQueryCriteriaANDGroup extends KGQueryCriteriaGroup {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGQueryCriteriaANDGroup';
  }

  /**
   * Get property definitions for KGQueryCriteriaANDGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
