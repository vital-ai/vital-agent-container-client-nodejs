import { Card } from './card';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#CheckList
 */
export class CheckList extends Card {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#CheckList';
  }

  /**
   * Get property definitions for CheckList
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
