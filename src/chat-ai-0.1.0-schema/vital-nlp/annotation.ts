import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-nlp#Annotation
 */
export class Annotation extends VITAL_Node {
  public annotationValue?: string;
  public annotationName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-nlp#Annotation';
  }

  /**
   * Get property definitions for Annotation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasAnnotationValue',
        tsPropertyName: 'annotationValue',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-nlp#hasAnnotationName',
        tsPropertyName: 'annotationName',
        type: 'string',
        required: false
      }
    ];
  }


}
