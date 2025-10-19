import { DialogPart } from '../vital-aimp/dialogPart';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-ml#RecommendationModelInput
 */
export class RecommendationModelInput extends DialogPart {
  public parameterValue?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-ml#RecommendationModelInput';
  }

  /**
   * Get property definitions for RecommendationModelInput
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
