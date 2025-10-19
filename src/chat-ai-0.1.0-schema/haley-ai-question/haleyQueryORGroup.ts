import { HaleyQueryGroup } from './haleyQueryGroup';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyQueryORGroup
 */
export class HaleyQueryORGroup extends HaleyQueryGroup {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyQueryORGroup';
  }

  /**
   * Get property definitions for HaleyQueryORGroup
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
