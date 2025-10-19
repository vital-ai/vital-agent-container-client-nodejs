import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital#DatascriptInfo
 */
export class DatascriptInfo extends VITAL_Node {
  public info?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital#DatascriptInfo';
  }

  /**
   * Get property definitions for DatascriptInfo
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasInfo',
        tsPropertyName: 'info',
        type: 'string',
        required: false
      }
    ];
  }


}
