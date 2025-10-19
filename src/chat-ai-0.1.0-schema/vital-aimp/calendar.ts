import { AIMPThing } from './aimpthing';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Calendar
 */
export class Calendar extends AIMPThing {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Calendar';
  }

  /**
   * Get property definitions for Calendar
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
