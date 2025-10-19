import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#RemoveQuestionMessage
 */
export class RemoveQuestionMessage extends AIMPMessage {
  public questionURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#RemoveQuestionMessage';
  }

  /**
   * Get property definitions for RemoveQuestionMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasQuestionURI',
        tsPropertyName: 'questionURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
