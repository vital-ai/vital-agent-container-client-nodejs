import { DialogPart } from '../vital-aimp/dialogPart';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#PredictionModelInput
 */
export class PredictionModelInput extends DialogPart {
  public parameterValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#PredictionModelInput';
  }

  /**
   * Get property definitions for PredictionModelInput
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
