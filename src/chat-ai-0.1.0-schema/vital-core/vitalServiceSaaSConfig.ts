import { VitalServiceConfig } from './vitalServiceConfig';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceSaaSConfig
 */
export class VitalServiceSaaSConfig extends VitalServiceConfig {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceSaaSConfig';
  }

  /**
   * Get property definitions for VitalServiceSaaSConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
