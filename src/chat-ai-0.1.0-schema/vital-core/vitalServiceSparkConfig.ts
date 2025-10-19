import { VitalServiceConfig } from './vitalServiceConfig';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceSparkConfig
 */
export class VitalServiceSparkConfig extends VitalServiceConfig {
  public endpointURL?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceSparkConfig';
  }

  /**
   * Get property definitions for VitalServiceSparkConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasEndpointURL',
        tsPropertyName: 'endpointURL',
        type: 'string',
        required: false
      }
    ];
  }


}
