import { BaseInteractionPart } from './baseInteractionPart';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ExternalInteractionPart
 */
export class ExternalInteractionPart extends BaseInteractionPart {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ExternalInteractionPart';
  }

  /**
   * Get property definitions for ExternalInteractionPart
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
