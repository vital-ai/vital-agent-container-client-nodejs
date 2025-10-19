import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#FlowPredictModel
 */
export class FlowPredictModel extends VITAL_Node {
  public modelType?: string;
  public modelPath?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#FlowPredictModel';
  }

  /**
   * Get property definitions for FlowPredictModel
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasModelType',
        tsPropertyName: 'modelType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasModelPath',
        tsPropertyName: 'modelPath',
        type: 'string',
        required: false
      }
    ];
  }


}
