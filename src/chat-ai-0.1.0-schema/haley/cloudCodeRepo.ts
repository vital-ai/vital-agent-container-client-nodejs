import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudCodeRepo
 */
export class CloudCodeRepo extends HaleyCloud {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudCodeRepo';
  }

  /**
   * Get property definitions for CloudCodeRepo
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
