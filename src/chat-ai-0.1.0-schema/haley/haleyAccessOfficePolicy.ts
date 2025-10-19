import { HaleyAccessPolicy } from './haleyAccessPolicy';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessOfficePolicy
 */
export class HaleyAccessOfficePolicy extends HaleyAccessPolicy {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccessOfficePolicy';
  }

  /**
   * Get property definitions for HaleyAccessOfficePolicy
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
