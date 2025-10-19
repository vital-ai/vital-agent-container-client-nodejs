import { VitalServiceConfig } from './vitalServiceConfig';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceLuceneMemoryConfig
 */
export class VitalServiceLuceneMemoryConfig extends VitalServiceConfig {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceLuceneMemoryConfig';
  }

  /**
   * Get property definitions for VitalServiceLuceneMemoryConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
