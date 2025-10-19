import { HaleyChatCommand } from './haleyChatCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#SendEmailRequest
 */
export class SendEmailRequest extends HaleyChatCommand {
  public emailSendMethodURI?: string;
  public emailDeliveryScheduleURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#SendEmailRequest';
  }

  /**
   * Get property definitions for SendEmailRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasEmailSendMethodURI',
        tsPropertyName: 'emailSendMethodURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasEmailDeliveryScheduleURI',
        tsPropertyName: 'emailDeliveryScheduleURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
