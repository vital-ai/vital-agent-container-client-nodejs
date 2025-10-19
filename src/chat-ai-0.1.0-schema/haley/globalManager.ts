import { HaleyAccount } from './haleyAccount';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#GlobalManager
 */
export class GlobalManager extends HaleyAccount {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#GlobalManager';
  }

  /**
   * Get property definitions for GlobalManager
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
