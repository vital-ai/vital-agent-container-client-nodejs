import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EmailsList
 */
export class EmailsList extends Card {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EmailsList';
  }

  /**
   * Get property definitions for EmailsList
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
