import { AIMPEmailMessage } from './aimpemailMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SendEmail
 */
export class SendEmail extends AIMPEmailMessage {
  public messageServiceURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SendEmail';
  }

  /**
   * Get property definitions for SendEmail
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageServiceURI',
        tsPropertyName: 'messageServiceURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
