import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VITAL_Query
 */
export class VITAL_Query extends VITAL_Node {
  public queryString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VITAL_Query';
  }

  /**
   * Get property definitions for VITAL_Query
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasQueryString',
        tsPropertyName: 'queryString',
        type: 'string',
        required: false
      }
    ];
  }


}
