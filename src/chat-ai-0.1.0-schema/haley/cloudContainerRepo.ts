import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudContainerRepo
 */
export class CloudContainerRepo extends HaleyCloud {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudContainerRepo';
  }

  /**
   * Get property definitions for CloudContainerRepo
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
