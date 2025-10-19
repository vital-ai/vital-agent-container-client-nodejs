import { DialogPart } from './dialogPart';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DataScriptInput
 */
export class DataScriptInput extends DialogPart {
  public parameterValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DataScriptInput';
  }

  /**
   * Get property definitions for DataScriptInput
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasParameterValue',
        tsPropertyName: 'parameterValue',
        type: 'string',
        required: false
      }
    ];
  }


}
