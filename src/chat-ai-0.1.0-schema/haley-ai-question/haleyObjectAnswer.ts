import { HaleyAnswer } from './haleyAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyObjectAnswer
 */
export class HaleyObjectAnswer extends HaleyAnswer {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyObjectAnswer';
  }

  /**
   * Get property definitions for HaleyObjectAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
