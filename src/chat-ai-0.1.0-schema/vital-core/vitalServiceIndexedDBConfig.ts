import { VitalServiceConfig } from './vitalServiceConfig';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig
 */
export class VitalServiceIndexedDBConfig extends VitalServiceConfig {
  public selectQueries?: string;
  public graphQueries?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceIndexedDBConfig';
  }

  /**
   * Get property definitions for VitalServiceIndexedDBConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSelectQueries',
        tsPropertyName: 'selectQueries',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasGraphQueries',
        tsPropertyName: 'graphQueries',
        type: 'string',
        required: false
      }
    ];
  }


}
