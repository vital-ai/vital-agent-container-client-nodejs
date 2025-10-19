import { VitalServiceConfig } from './vitalServiceConfig';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceSqlConfig
 */
export class VitalServiceSqlConfig extends VitalServiceConfig {
  public dbType?: string;
  public endpointURL?: string;
  public poolInitialSize?: number;
  public poolMaxTotal?: number;
  public password?: string;
  public username?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceSqlConfig';
  }

  /**
   * Get property definitions for VitalServiceSqlConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDbType',
        tsPropertyName: 'dbType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasEndpointURL',
        tsPropertyName: 'endpointURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPoolInitialSize',
        tsPropertyName: 'poolInitialSize',
        type: 'number',
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
      }
    ];
  }


}
