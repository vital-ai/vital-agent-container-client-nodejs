import { HaleyAnswer } from './haleyAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyLongTextAnswer
 */
export class HaleyLongTextAnswer extends HaleyAnswer {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyLongTextAnswer';
  }

  /**
   * Get property definitions for HaleyLongTextAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
