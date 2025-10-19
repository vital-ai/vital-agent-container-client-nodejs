import { VitalServiceConfig } from './vitalServiceConfig';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServicePrimeConfig
 */
export class VitalServicePrimeConfig extends VitalServiceConfig {
  public endpointURL?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServicePrimeConfig';
  }

  /**
   * Get property definitions for VitalServicePrimeConfig
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
