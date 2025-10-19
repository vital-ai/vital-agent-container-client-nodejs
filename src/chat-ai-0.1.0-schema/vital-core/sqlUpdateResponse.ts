import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SqlUpdateResponse
 */
export class SqlUpdateResponse extends VITAL_Node {
  public updatedRowsCount?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#SqlUpdateResponse';
  }

  /**
   * Get property definitions for SqlUpdateResponse
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUpdatedRowsCount',
        tsPropertyName: 'updatedRowsCount',
        type: 'number',
        required: false
      }
    ];
  }


}
