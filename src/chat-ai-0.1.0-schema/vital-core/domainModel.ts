import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#DomainModel
 */
export class DomainModel extends VITAL_Node {
  public organizationID?: string;
  public versionInfo?: string;
  public domainOWLHash?: string;
  public appID?: string;
  public preferred?: boolean;
  public preferredImportVersions?: string[];
  public backwardCompVersion?: string;
  public defaultPackageValue?: string;
  public domainOWL?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#DomainModel';
  }

  /**
   * Get property definitions for DomainModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasOrganizationID',
        tsPropertyName: 'organizationID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasVersionInfo',
        tsPropertyName: 'versionInfo',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDomainOWLHash',
        tsPropertyName: 'domainOWLHash',
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
        propertyURI: 'http://vital.ai/ontology/vital-core#isPreferred',
        tsPropertyName: 'preferred',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasPreferredImportVersions',
        tsPropertyName: 'preferredImportVersions',
        type: 'string[]',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasBackwardCompVersion',
        tsPropertyName: 'backwardCompVersion',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDefaultPackageValue',
        tsPropertyName: 'defaultPackageValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasDomainOWL',
        tsPropertyName: 'domainOWL',
        type: 'string',
        required: false
      }
    ];
  }


}
