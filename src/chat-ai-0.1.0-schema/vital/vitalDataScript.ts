import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#VitalDataScript
 */
export class VitalDataScript extends VITAL_Node {
  public adminScript?: boolean;
  public organizationID?: string;
  public scriptPath?: string;
  public appID?: string;
  public lastCompilationError?: string;
  public lastModifiedDate?: string | Date;
  public vitalDataScriptBody?: string;
  public regularScript?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#VitalDataScript';
  }

  /**
   * Get property definitions for VitalDataScript
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#isAdminScript',
        tsPropertyName: 'adminScript',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasOrganizationID',
        tsPropertyName: 'organizationID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasScriptPath',
        tsPropertyName: 'scriptPath',
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
        propertyURI: 'http://vital.ai/ontology/vital#hasLastCompilationError',
        tsPropertyName: 'lastCompilationError',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLastModifiedDate',
        tsPropertyName: 'lastModifiedDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasVitalDataScriptBody',
        tsPropertyName: 'vitalDataScriptBody',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#isRegularScript',
        tsPropertyName: 'regularScript',
        type: 'boolean',
        required: false
      }
    ];
  }


}
