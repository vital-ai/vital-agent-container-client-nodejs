import { AnswerMessage } from './answerMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#QuestionsPageNavigationMessage
 */
export class QuestionsPageNavigationMessage extends AnswerMessage {
  public requestedPage?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#QuestionsPageNavigationMessage';
  }

  /**
   * Get property definitions for QuestionsPageNavigationMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRequestedPage',
        tsPropertyName: 'requestedPage',
        type: 'string',
        required: false
      }
    ];
  }


}
