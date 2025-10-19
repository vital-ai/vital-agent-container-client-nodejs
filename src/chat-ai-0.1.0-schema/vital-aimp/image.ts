import { Media } from './media';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Image
 */
export class Image extends Media {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Image';
  }

  /**
   * Get property definitions for Image
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
