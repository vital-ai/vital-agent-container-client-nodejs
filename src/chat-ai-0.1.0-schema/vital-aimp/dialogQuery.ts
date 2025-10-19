import { DialogElement } from './dialogElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogQuery
 */
export class DialogQuery extends DialogElement {
  public resultListFactURI?: string;
  public createResultListFact?: boolean;
  public serviceName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogQuery';
  }

  /**
   * Get property definitions for DialogQuery
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasResultListFactURI',
        tsPropertyName: 'resultListFactURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isCreateResultListFact',
        tsPropertyName: 'createResultListFact',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasServiceName',
        tsPropertyName: 'serviceName',
        type: 'string',
        required: false
      }
    ];
  }


}
