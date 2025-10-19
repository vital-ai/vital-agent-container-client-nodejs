import { BaseInteraction } from './baseInteraction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AccountInteraction
 */
export class AccountInteraction extends BaseInteraction {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AccountInteraction';
  }

  /**
   * Get property definitions for AccountInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
