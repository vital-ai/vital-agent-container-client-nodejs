import { AnswerMessage } from './answerMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#FormPageAnswersMessage
 */
export class FormPageAnswersMessage extends AnswerMessage {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#FormPageAnswersMessage';
  }

  /**
   * Get property definitions for FormPageAnswersMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
