import { Answer } from './answer';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ChoiceAnswer
 */
export class ChoiceAnswer extends Answer {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ChoiceAnswer';
  }

  /**
   * Get property definitions for ChoiceAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
