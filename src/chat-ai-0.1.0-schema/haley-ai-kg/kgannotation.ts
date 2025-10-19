import { KGNode } from './kgnode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGAnnotation
 */
export class KGAnnotation extends KGNode {
  public annotationText?: string;
  public kGAnnotationType?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGAnnotation';
  }

  /**
   * Get property definitions for KGAnnotation
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasAnnotationText',
        tsPropertyName: 'annotationText',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGAnnotationType',
        tsPropertyName: 'kGAnnotationType',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
