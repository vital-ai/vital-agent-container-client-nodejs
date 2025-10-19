import { ThingCard } from './thingCard';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ThingWideCard
 */
export class ThingWideCard extends ThingCard {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ThingWideCard';
  }

  /**
   * Get property definitions for ThingWideCard
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
