import { KGMedia } from './kgmedia';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGVideo
 */
export class KGVideo extends KGMedia {
  public kGMediaDuration?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGVideo';
  }

  /**
   * Get property definitions for KGVideo
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGMediaDuration',
        tsPropertyName: 'kGMediaDuration',
        type: 'number',
        required: false
      }
    ];
  }


}
