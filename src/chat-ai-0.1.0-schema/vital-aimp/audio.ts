import { Media } from './media';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Audio
 */
export class Audio extends Media {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Audio';
  }

  /**
   * Get property definitions for Audio
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
