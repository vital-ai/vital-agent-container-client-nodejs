import { AIMPMessage } from './aimpmessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SmsReceived
 */
export class SmsReceived extends AIMPMessage {
  public messageServiceURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SmsReceived';
  }

  /**
   * Get property definitions for SmsReceived
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
