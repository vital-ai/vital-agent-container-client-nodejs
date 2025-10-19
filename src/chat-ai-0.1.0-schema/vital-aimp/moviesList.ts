import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#MoviesList
 */
export class MoviesList extends Card {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#MoviesList';
  }

  /**
   * Get property definitions for MoviesList
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
