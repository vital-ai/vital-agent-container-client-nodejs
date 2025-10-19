import { BaseInteraction } from './baseInteraction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ExternalInteraction
 */
export class ExternalInteraction extends BaseInteraction {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ExternalInteraction';
  }

  /**
   * Get property definitions for ExternalInteraction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
