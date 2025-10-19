import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalServiceConfig
 */
export class VitalServiceConfig extends VITAL_Node {
  public connectionState?: string;
  public organizationID?: string;
  public targetAppID?: string;
  public primary?: boolean;
  public key?: string;
  public appID?: string;
  public uriGenerationStrategy?: string;
  public configString?: string;
  public defaultSegmentName?: string;
  public connectionError?: string;
  public targetOrganizationID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalServiceConfig';
  }

  /**
   * Get property definitions for VitalServiceConfig
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasConnectionState',
        tsPropertyName: 'connectionState',
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
        propertyURI: 'http://vital.ai/ontology/vital-core#hasTargetAppID',
        tsPropertyName: 'targetAppID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#isPrimary',
        tsPropertyName: 'primary',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasKey',
        tsPropertyName: 'key',
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
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUriGenerationStrategy',
        tsPropertyName: 'uriGenerationStrategy',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasConfigString',
        tsPropertyName: 'configString',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDefaultSegmentName',
        tsPropertyName: 'defaultSegmentName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasConnectionError',
        tsPropertyName: 'connectionError',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasTargetOrganizationID',
        tsPropertyName: 'targetOrganizationID',
        type: 'string',
        required: false
      }
    ];
  }


}
