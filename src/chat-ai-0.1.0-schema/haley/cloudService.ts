import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudService
 */
export class CloudService extends HaleyCloud {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudService';
  }

  /**
   * Get property definitions for CloudService
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
