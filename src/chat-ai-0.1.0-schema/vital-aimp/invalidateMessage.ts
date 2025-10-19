import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#InvalidateMessage
 */
export class InvalidateMessage extends AIMPMessage {
  public messageURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#InvalidateMessage';
  }

  /**
   * Get property definitions for InvalidateMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasMessageURI',
        tsPropertyName: 'messageURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
