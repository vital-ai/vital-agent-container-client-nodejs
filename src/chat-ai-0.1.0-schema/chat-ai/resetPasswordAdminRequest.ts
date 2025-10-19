import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#ResetPasswordAdminRequest
 */
export class ResetPasswordAdminRequest extends HaleyChatAdminCommand {
  public requestedRepeatedPassword?: string;
  public accountModificationTrackingIdentifier?: string;
  public requestedEmailAddress?: string;
  public requestedPassword?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#ResetPasswordAdminRequest';
  }

  /**
   * Get property definitions for ResetPasswordAdminRequest
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasRequestedRepeatedPassword',
        tsPropertyName: 'requestedRepeatedPassword',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasAccountModificationTrackingIdentifier',
        tsPropertyName: 'accountModificationTrackingIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasRequestedEmailAddress',
        tsPropertyName: 'requestedEmailAddress',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasRequestedPassword',
        tsPropertyName: 'requestedPassword',
        type: 'string',
        required: false
      }
    ];
  }


}
