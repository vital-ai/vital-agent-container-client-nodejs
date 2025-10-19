import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#ScrollToQuestionMessage
 */
export class ScrollToQuestionMessage extends AIMPMessage {
  public scrollToQuestionIndex?: number;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#ScrollToQuestionMessage';
  }

  /**
   * Get property definitions for ScrollToQuestionMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasScrollToQuestionIndex',
        tsPropertyName: 'scrollToQuestionIndex',
        type: 'number',
        required: false,
        format: 'double'
      }
    ];
  }


}
