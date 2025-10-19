import { UserTextMessage } from './userTextMessage';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SmsTextMessage
 */
export class SmsTextMessage extends UserTextMessage {
  declare public recipient?: string;
  public mms?: boolean;
  public sender?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SmsTextMessage';
  }

  /**
   * Get property definitions for SmsTextMessage
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasRecipient',
        tsPropertyName: 'recipient',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isMms',
        tsPropertyName: 'mms',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSender',
        tsPropertyName: 'sender',
        type: 'string',
        required: false
      }
    ];
  }


}
