import { VitalServiceConfig } from './vitalServiceConfig';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceLuceneDiskConfig
 */
export class VitalServiceLuceneDiskConfig extends VitalServiceConfig {
  public rootPath?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceLuceneDiskConfig';
  }

  /**
   * Get property definitions for VitalServiceLuceneDiskConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRootPath',
        tsPropertyName: 'rootPath',
        type: 'string',
        required: false
      }
    ];
  }


}
