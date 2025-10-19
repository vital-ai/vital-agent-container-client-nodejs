import { VitalServiceConfig } from './vitalServiceConfig';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceMockConfig
 */
export class VitalServiceMockConfig extends VitalServiceConfig {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceMockConfig';
  }

  /**
   * Get property definitions for VitalServiceMockConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
