import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Query
 */
export class Query extends VITAL_Node {
  public globalQuery?: boolean;
  public queryString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Query';
  }

  /**
   * Get property definitions for Query
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalQuery',
        tsPropertyName: 'globalQuery',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasQueryString',
        tsPropertyName: 'queryString',
        type: 'string',
        required: false
      }
    ];
  }


}
