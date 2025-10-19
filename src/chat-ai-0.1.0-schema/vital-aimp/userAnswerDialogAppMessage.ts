import { HaleyMessage } from './haleyMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage
 */
export class UserAnswerDialogAppMessage extends HaleyMessage {
  public helpRequested?: boolean;
  public questionClosed?: boolean;
  public goBackSelected?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#UserAnswerDialogAppMessage';
  }

  /**
   * Get property definitions for UserAnswerDialogAppMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isHelpRequested',
        tsPropertyName: 'helpRequested',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isQuestionClosed',
        tsPropertyName: 'questionClosed',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isGoBackSelected',
        tsPropertyName: 'goBackSelected',
        type: 'boolean',
        required: false
      }
    ];
  }


}
