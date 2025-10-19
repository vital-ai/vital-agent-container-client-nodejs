import { QuestionMessage } from '../vital-aimp/questionMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyChannelQuestion
 */
export class HaleyChannelQuestion extends QuestionMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyChannelQuestion';
  }

  /**
   * Get property definitions for HaleyChannelQuestion
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
