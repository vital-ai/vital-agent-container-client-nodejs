import { KGMedia } from './kgmedia';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGImage
 */
export class KGImage extends KGMedia {
  public kGPixelWidth?: number;
  public kGPixelHeight?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGImage';
  }

  /**
   * Get property definitions for KGImage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPixelWidth',
        tsPropertyName: 'kGPixelWidth',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGPixelHeight',
        tsPropertyName: 'kGPixelHeight',
        type: 'number',
        required: false
      }
    ];
  }


}
