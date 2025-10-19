import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#DatascriptRun
 */
export class DatascriptRun extends VITAL_Node {
  public lastModifiedDate?: string | Date;
  public jobID?: string;
  public jobStatus?: string;
  public scriptPath?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#DatascriptRun';
  }

  /**
   * Get property definitions for DatascriptRun
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLastModifiedDate',
        tsPropertyName: 'lastModifiedDate',
        type: 'string',
        required: false,
        format: 'date-time'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasJobID',
        tsPropertyName: 'jobID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasJobStatus',
        tsPropertyName: 'jobStatus',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasScriptPath',
        tsPropertyName: 'scriptPath',
        type: 'string',
        required: false
      }
    ];
  }


}
