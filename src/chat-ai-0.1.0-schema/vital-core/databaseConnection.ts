import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#DatabaseConnection
 */
export class DatabaseConnection extends VITAL_Node {
  public endpointURL?: string;
  public organizationID?: string;
  public password?: string;
  public endpointType?: string;
  public username?: string;
  public appID?: string;
  public readOnly?: boolean;
  public configString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#DatabaseConnection';
  }

  /**
   * Get property definitions for DatabaseConnection
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasEndpointURL',
        tsPropertyName: 'endpointURL',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasOrganizationID',
        tsPropertyName: 'organizationID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPassword',
        tsPropertyName: 'password',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasEndpointType',
        tsPropertyName: 'endpointType',
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
        propertyURI: 'http://vital.ai/ontology/vital-core#hasAppID',
        tsPropertyName: 'appID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isReadOnly',
        tsPropertyName: 'readOnly',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasConfigString',
        tsPropertyName: 'configString',
        type: 'string',
        required: false
      }
    ];
  }


}
