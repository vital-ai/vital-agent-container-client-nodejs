import { HaleyDefaultAnswer } from './haleyDefaultAnswer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-question#HaleyDefaultObjectAnswer
 */
export class HaleyDefaultObjectAnswer extends HaleyDefaultAnswer {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-question#HaleyDefaultObjectAnswer';
  }

  /**
   * Get property definitions for HaleyDefaultObjectAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
