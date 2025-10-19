import { HaleyAccessPolicy } from './haleyAccessPolicy';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccessTeamPolicy
 */
export class HaleyAccessTeamPolicy extends HaleyAccessPolicy {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccessTeamPolicy';
  }

  /**
   * Get property definitions for HaleyAccessTeamPolicy
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
