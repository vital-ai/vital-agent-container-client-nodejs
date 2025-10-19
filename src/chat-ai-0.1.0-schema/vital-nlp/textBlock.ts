import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#TextBlock
 */
export class TextBlock extends VITAL_Node {
  public textBlockText?: string;
  public transformationVector?: string;
  public textBlockOffset?: number;
  public textBlockLength?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#TextBlock';
  }

  /**
   * Get property definitions for TextBlock
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTextBlockText',
        tsPropertyName: 'textBlockText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTransformationVector',
        tsPropertyName: 'transformationVector',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTextBlockOffset',
        tsPropertyName: 'textBlockOffset',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasTextBlockLength',
        tsPropertyName: 'textBlockLength',
        type: 'number',
        required: false
      }
    ];
  }


}
