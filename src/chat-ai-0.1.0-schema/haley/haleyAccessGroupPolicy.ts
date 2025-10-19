import { HaleyAccessPolicy } from './haleyAccessPolicy';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessGroupPolicy
 */
export class HaleyAccessGroupPolicy extends HaleyAccessPolicy {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccessGroupPolicy';
  }

  /**
   * Get property definitions for HaleyAccessGroupPolicy
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
