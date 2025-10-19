import { Media } from './media';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Video
 */
export class Video extends Media {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Video';
  }

  /**
   * Get property definitions for Video
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
