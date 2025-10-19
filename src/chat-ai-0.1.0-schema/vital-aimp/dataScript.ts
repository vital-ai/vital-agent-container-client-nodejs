import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DataScript
 */
export class DataScript extends VITAL_Node {
  public scriptBody?: string;
  public globalDatascript?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DataScript';
  }

  /**
   * Get property definitions for DataScript
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasScriptBody',
        tsPropertyName: 'scriptBody',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGlobalDatascript',
        tsPropertyName: 'globalDatascript',
        type: 'boolean',
        required: false
      }
    ];
  }


}
