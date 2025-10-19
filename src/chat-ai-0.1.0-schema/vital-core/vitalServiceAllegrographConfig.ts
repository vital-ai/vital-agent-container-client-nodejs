import { VitalServiceConfig } from './vitalServiceConfig';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig
 */
export class VitalServiceAllegrographConfig extends VitalServiceConfig {
  public catalogName?: string;
  public serverURL?: string;
  public poolMaxTotal?: number;
  public password?: string;
  public username?: string;
  public repositoryName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceAllegrographConfig';
  }

  /**
   * Get property definitions for VitalServiceAllegrographConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasCatalogName',
        tsPropertyName: 'catalogName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasServerURL',
        tsPropertyName: 'serverURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPoolMaxTotal',
        tsPropertyName: 'poolMaxTotal',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPassword',
        tsPropertyName: 'password',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUsername',
        tsPropertyName: 'username',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasRepositoryName',
        tsPropertyName: 'repositoryName',
        type: 'string',
        required: false
      }
    ];
  }


}
