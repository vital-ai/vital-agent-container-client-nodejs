import { AnswerMessage } from '../vital-aimp/answerMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyChannelAnswer
 */
export class HaleyChannelAnswer extends AnswerMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyChannelAnswer';
  }

  /**
   * Get property definitions for HaleyChannelAnswer
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
