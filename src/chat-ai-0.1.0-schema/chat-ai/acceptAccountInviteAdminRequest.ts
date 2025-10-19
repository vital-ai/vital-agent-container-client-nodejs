import { HaleyChatAdminCommand } from './haleyChatAdminCommand';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/chat-ai#AcceptAccountInviteAdminRequest
 */
export class AcceptAccountInviteAdminRequest extends HaleyChatAdminCommand {
  public requestedRepeatedPassword?: string;
  public requestedLoginName?: string;
  public requestedAccountName?: string;
  public accountModificationTrackingIdentifier?: string;
  public requestedPassword?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/chat-ai#AcceptAccountInviteAdminRequest';
  }

  /**
   * Get property definitions for AcceptAccountInviteAdminRequest
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasRequestedLoginName',
        tsPropertyName: 'requestedLoginName',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasRequestedAccountName',
        tsPropertyName: 'requestedAccountName',
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
        propertyURI: 'http://vital.ai/ontology/chat-ai#hasRequestedPassword',
        tsPropertyName: 'requestedPassword',
        type: 'string',
        required: false
      }
    ];
  }


}
