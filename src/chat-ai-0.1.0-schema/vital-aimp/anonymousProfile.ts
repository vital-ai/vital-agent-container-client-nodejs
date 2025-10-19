import { BaseProfile } from './baseProfile';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AnonymousProfile
 */
export class AnonymousProfile extends BaseProfile {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AnonymousProfile';
  }

  /**
   * Get property definitions for AnonymousProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
