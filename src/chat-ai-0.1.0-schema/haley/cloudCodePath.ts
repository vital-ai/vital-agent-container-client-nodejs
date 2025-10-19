import { HaleyCloud } from './haleyCloud';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#CloudCodePath
 */
export class CloudCodePath extends HaleyCloud {
  public cloudCodePathTypeURI?: string;
  public codePath?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#CloudCodePath';
  }

  /**
   * Get property definitions for CloudCodePath
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCloudCodePathTypeURI',
        tsPropertyName: 'cloudCodePathTypeURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasCodePath',
        tsPropertyName: 'codePath',
        type: 'string',
        required: false
      }
    ];
  }


}
